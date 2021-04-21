const helloRoute = {
  method: 'get',
  path: '/hello',
  handler: (req, res) => {
    res.send("Hello!");
  },
}

export const routes = [
  helloRoute,
];

