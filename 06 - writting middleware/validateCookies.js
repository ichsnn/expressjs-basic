const express = require('express');
const app = express();

// ***** Middleware function validateCookies *****
const cookieParser = require('cookie-parser');

async function cookieValidator(cookies) {
    console.log(cookies)
    try {
        await externallyValidateCookie(cookies.testCookie);
    } catch {
        throw new Error('Invalid cookies');
    }
}

const validateCookies = async (req, res, next) => {
    await cookieValidator(req.cookies);
    next();
}

app.use(cookieParser());
app.use(validateCookies)

app.use((err, req, res, next) => {
    res.status(400).send(err.message);
})


app.listen(3000, () => {
    console.log(`Server running on port 3000`);
});
