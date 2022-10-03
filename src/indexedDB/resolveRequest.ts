
export default function resolveRequest (request: IDBRequest, successCb: any, errorCb: any) {
  request.onsuccess = successCb
  request.onerror = errorCb
}