import exspress from 'express';
import { servicesData } from '../data/servicesData.js';
import { members } from '../data/mebers.js';

export const servicesRouter = exspress.Router();

servicesRouter.get('/', (req, res) => {
    return res.send('Services page');
});

servicesRouter.get('/:serviceName', (req, res) => {
    if (servicesData.includes(req.params.serviceName)) {
        return res.send(`About "${req.params.serviceName}" service...`);
    }

    return res.send('Services page: such service is not recognized...');
});

servicesRouter.get('/:serviceName/members', (req, res) => {
    if (servicesData.includes(req.params.serviceName)) {
        return res.send(`Paslaugos "${req.params.serviceName}" nariu sarasas...`);
    }

    return res.send('Services page: such service is not recognized...');
});

servicesRouter.get('/:serviceName/members/:memberName', (req, res) => {
    const { serviceName, memberName } = req.params;

    if (!servicesData.includes(serviceName)) {
        return res.send('Services page: such service is not recognized...');
    }

    if (!members.includes(memberName)) {
        return res.send(`Paslaugoje "${serviceName}" nario "${memberName}" nepavyko rasti...`);
    }

    return res.send(`Paslaugos "${serviceName}" nario "${memberName}" informacija...`);
});
