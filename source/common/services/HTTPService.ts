import { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import { Storage } from '@/components';

class HTTPService
{
    private instance: AxiosInstance;

    constructor(_instance: AxiosInstance)
    {
        this.instance = _instance;
        this.refreshTokenInterception();
    }

    async setToken(_token: string, _refreshToken: string)
    {
        await Storage.setItem('token', _token);
        await Storage.setItem('refreshToken', _refreshToken);
        this.instance.defaults.headers['TOKEN'] = _token;
    }

    private refreshTokenInterception()
    {
        this.instance.interceptors.response.use((response: AxiosResponse) => response, async (error: AxiosError) => {
            
            if (error.response.status === 401) {
                const refreshToken: string = await Storage.getItem('refreshToken');
                const { data }: AxiosResponse = await this.post('path/to/refresh', { refreshToken });
                await this.setToken(data.token, data.refreshToken);
                this.instance.defaults.headers['TOKEN'] = data.token;
                return this.instance;
            }

            return Promise.reject(error);
        });
    }

    async get(path: string): Promise<AxiosResponse>
    {
        const response: AxiosResponse = await this.instance.get(path);
        return response;
    }
    
    async post(path: string, body: object): Promise<AxiosResponse>
    {
        const response: AxiosResponse = await this.instance.post(path, body);
        return response;
    }
}

export default HTTPService;