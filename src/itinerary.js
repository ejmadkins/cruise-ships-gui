(function exportItinerary() {
  function Itinerary(ports) {
    this.ports = ports;
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = Port;
  } else {
    window.Port = Port;
  }
})();
