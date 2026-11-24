const app = Elm.Float.init({
    flags: 0.5
});

app.ports.incoming.send(0.5);
// @ts-expect-error Argument of type 'string' is not assignable to parameter of type 'number'.
app.ports.incoming.send("");

app.ports.outgoing.subscribe(async (f) => {
    f.toFixed(2);
    // @ts-expect-error Property 'toUpperCase' does not exist on type 'number'.
    f.toUpperCase();
});

Elm.Float.init({
    // @ts-expect-error Type 'string' is not assignable to type 'number'.
    flags: ""
});
