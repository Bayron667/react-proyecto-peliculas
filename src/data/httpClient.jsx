const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDgyOWMxZjMyMTAzZWZmMzEzMmQyNmE0YTBhYmVmYiIsInN1YiI6IjY1M2ZkMzc3MTA5Y2QwMDEwYjA0ZGRhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VRXD5TdSKW_GpVGu2tJGaqskI0s587ZBtG_SLdAWAKA",
        "Content-Type": "aplication/json;charset=utf-8"
    },
  }).then((result)=>result.json());
}
