describe("getTilesDOM", function () {
  // Test the getTilesDOM function for creating new element
  it("should return empty tiles from tic tac toe table", function () {
    const tilesElement = getTilesDOM();
    expect(tilesElement.length).toEqual(0);
  });
});
