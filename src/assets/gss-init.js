//TODO - Should be .coffee
//TODO - Discuss where we should put global assets common to all layouts
//TODO - Pass suggested variables to the constructor

window.engine = new GSS(document);

GSS.Document.prototype.Output.prototype.Unit.define({
  md: function(value, engine, operation, continuation, scope) {
    return value * engine.watch(null, 'md', operation, continuation, scope);
  },
  g: function(value, engine, operation, continuation, scope) {
    return value * engine.watch(null, 'g', operation, continuation, scope);
  }
})

GSS.Document.prototype.Input.prototype.Unit.define({
  md: function(value) {
    return ['*', ['get', 'md'], value];
  },
  g: function(value) {
    return ['*', ['get', 'g'], value];
  }
})
