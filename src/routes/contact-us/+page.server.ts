import type { PageServerLoad } from './contact-us/$types';
import fs from 'fs';
import path from 'path';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions = {
    default: async({ request }) => {
        //Getting form data
        const formData = await request.formData();

        //Converting formData to plain object
        const dataObj = {};
        for (const [key, value] of formData.entries()){
            dataObj[key] = value;
        } 

        

        //path to json file
        const filePath = path.join(process.cwd(), 'form-submissions.json');

        //Read existing data or start new array
        let existingData = [];

        if(fs.existsSync(filePath)){
            existingData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        }

        //Adding new form data
        existingData.push({...dataObj, submittedAt: new Date().toISOString()});

        //Writing updated json
        fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));

        return {success: true}
    }
}