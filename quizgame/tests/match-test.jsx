const React = require('react');
const {mount} = require('enzyme');
const {Match} = require("../src/match");

const checkIfElementsRendered = (driver) => {
    const questions = driver.find(".question");
    expect(questions.length).toEqual(1);

    const answers = driver.find(".answer");
    expect(answers.length).toEqual(4);
}

test("render a quiz", () => {
    const driver = mount(<Match/>);
    checkIfElementsRendered(driver);
});

test("test an answer", () => {
    const driver = mount(<Match/>);

    let msg = undefined;

    global.alert = (s) => {
        msg = s
    };

    const first = driver.find(".answer").at(0);
    first.simulate('click');

    console.log(msg);

    checkIfElementsRendered(driver);
    expect(msg).toBeDefined();
})