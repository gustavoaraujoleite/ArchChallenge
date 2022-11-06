import api from "../api";

export function CollectProducts() {
  const response = api.get();
  return response;
}
