async function main() {
  const name = "bar";
  console.log((await import(`./foo/${name}.js`)).Foo);
}
