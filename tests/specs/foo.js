//console.log(new Error().stack)

describe('foo', async () => {

  it("should print foo", async () => {
    //console.log(new Error().stack)

    await browser.pause(2000)
    console.log("foo")
  })

})
