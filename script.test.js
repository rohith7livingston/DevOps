const validateEmail = (email) => email.includes("@") && email.includes(".");
test("Valid email should pass", () => {
    expect(validateEmail("test@example.com")).toBe(true);
});
test("Invalid email should fail", () => {
    expect(validateEmail("testexample.com")).toBe(false);
});
