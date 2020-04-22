import { useQuery, useMutation, queryCache } from "react-query";
import _ from "lodash";
import React from "react";
import { client } from "./api-client";
import * as usersClient from "./users-client";

async function fetchAuth() {
  const auth0_json = await client("api/me").then((data) => data);

  const full_name = auth0_json["http://full_name"];
  auth0_json.full_name = full_name;
  return auth0_json;
}

function getAirtableFields(sub) {
  return usersClient.getAirtableFields(sub).then((data) => data);
}

function setAirtableFields({ rowid, fields }) {
  // Why am I not getting rowid and fields here?
  console.log("Do I ever get here? setAirtableFields");
  return usersClient.setAirtableFields({ rowid, fields }).then((data) => data);
}

function useUserData() {
  const [loading, setLoading] = React.useState(false);
  const { data: auth } = useQuery({
    queryKey: ["user"],
    queryFn: fetchAuth,
  });

  const { data: air, status } = useQuery({
    queryKey: auth && [auth.sub],
    queryFn: getAirtableFields,
  });

  const user = React.useMemo(() => {
    return air
      ? {
          ...auth,
          ...air.fields,
          rowid: air.id,
          terms_accepted: _.get(air, "fields.terms_accepted", false),
        }
      : null;
  }, [air, auth]);

  React.useEffect(() => {
    setLoading(Boolean(status === "loading"));
  }, [status]);

  return { user, loading };
}

function _useSetUserData() {
  const [mutateUserData] = useMutation(
    ({ rowid, fields }) => setAirtableFields({ rowid, fields }), // I've also tried this just being setAirtableFields
    {
      onMutate: (fields) => {
        const previousValue = queryCache.getQueryData([fields.Auth0]);
        queryCache.setQueryData([fields.Auth0], (old) => ({
          ...old,
          items: [...old.items, ...fields],
        }));

        return previousValue;
      },

      // On failure, roll back to the previous value
      onError: (err, variables, previousValue) =>
        queryCache.setQueryData([fields.Auth0], previousValue),
      // After success or failure, refetch the user query
      onSettled: () => queryCache.refetchQueries([fields.Auth0]),
    }
  );
  return [mutateUserData];
}

function __useSetUserData() {
  const [mutateUserData] = useMutation(
    setAirtableFields, // I've also tried this just being setAirtableFields
    {
      onMutate: () => {
        queryCache.setQueryData([fields.Auth0], undefined);
      },
      onSettled: () => queryCache.refetchQueries([fields.Auth0]),
    }
  );
  return [mutateUserData];
}

// Final working version thanks to help from Tanner.
function useSetUserData() {
  const [mutateUserData] = useMutation(setAirtableFields, {
    onMutate: (variables) => {
      queryCache.setQueryData(variables.Auth0, undefined);
    },
    onSuccess: (data, error, variables) =>
      queryCache.refetchQueries(variables.Auth0),
  });
  return [mutateUserData];
}

export { useUserData, useSetUserData };
