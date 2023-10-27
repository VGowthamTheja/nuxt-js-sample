export default defineEventHandler((event) => {
    
  const name = event.path.split("?")[1].split("=")[1];
  return {
    message: `Hello, ${name}, from the server!`,
  };
});
