// const validate = (schema) => async (req, res, next) => {
//     try {

//         const parseBody = await schema.parseAsync(req.body)
//         req.body = parseBody
//         next()

//     } catch (error) {
//         const formattedErrors = error.errors?.map((err) => ({
//             field: err.path[0],
//             message: err.message,
//         }));

//         res.status(400).json({ errors: formattedErrors });
//         // res.status(400).json({ mes: error })

//     }
// }



const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body); // validate body
        req.body = parseBody; // save clean data
        next(); // move to next middleware
    } catch (error) {
        const firstError = error.errors?.[0]?.message;

        console.log('firstError', firstError)
        res.status(400).json({ mes: firstError, err: error })
    }
};

module.exports = validate;