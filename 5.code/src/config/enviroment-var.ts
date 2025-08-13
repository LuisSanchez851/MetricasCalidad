import * as joi from 'joi';
import "dovent/config";
import { promises } from 'dns';

export type ResturEnvironmentVars = {
    PORT:number;
}
type ValidationEnvironmentVars = {
    error: joi.ValidationError | undefined;
    value: ResturEnvironmentVars;
}

function validateEnvVars(vars:NodeJS.ProcessEnv):ValidationEnvironmentVars{
    const envSchem = joi.object({
        PORT: joi.number().required()
    }).unknown(true);  
    const { error, value } = envSchem.validate(vars);
    return {error, value}
}

const loadEnvVars = ():ResturEnvironmentVars => {
    const result = validateEnvVars(process.env);
    if(result.error){
        throw new Error(`Invalid environment variables:${result.error.message}`);
    }
    const value = result.value;
    return {
        PORT: value.PORT
    }
}
const envs = loadEnvVars();
export default envs;
