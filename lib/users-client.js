import { client } from "./api-client";

function getAuthFields({ cookie = "" }) {
  return client("api/me");
}

function getAirtableFields(auth0) {
  return client(`api/user`);
}

function setAirtableFields({ fields }) {
  return client(`api/user`, { body: { fields } });
}

export { getAuthFields, getAirtableFields, setAirtableFields };
