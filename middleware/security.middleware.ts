import * as csurf from 'csurf';
const csrfProtection = csurf({ cookie: true })

export {
    csrfProtection
}
