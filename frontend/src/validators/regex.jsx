const testEmail = (value) => {
    const emailPattern = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/gi;
    return emailPattern.test(value);
};

export default { testEmail };
