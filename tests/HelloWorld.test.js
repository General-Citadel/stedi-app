import HelloWorld from '../utils/HelloWorld';

it ("Should show Hello World", () => {
    let HelloWorldValue = HelloWorld();

    expect(HelloWorldValue).toBe("Hello World")
}
)