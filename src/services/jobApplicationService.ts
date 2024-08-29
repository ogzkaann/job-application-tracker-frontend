import axios from 'axios';
import {dummyApplications} from '../dummy/dummyJobApplicationData.js';

const apiClient = axios.create({
    baseURL: 'http://localhost:3000', // Backend API'nin base URL'si
    headers: {
        'Content-Type': 'application/json',
    },
});

export const jobApplicationService = {
    async fetchJobApplications() {
        return dummyApplications;

        try {
            // const response = await apiClient.get('/job-application');
            // return response.data;
        } catch (error) {
            console.warn('Server is not running, loading dummy data.');
            return dummyApplications;
        }
    },
    async fetchJobApplicationById(id: string) {
        return dummyApplications.find((app: {id: number}) => app.id.toString() === id);

        try {
            // const response = await apiClient.get(`/job-application/${id}`);
            // return response.data;
        } catch (error) {
            console.warn('Server is not running, loading dummy data.');
            return dummyApplications.find((app: {id: number}) => app.id.toString() === id);
        }
    },
    // Diğer API çağrıları için ek metotlar eklenebilir (create, update, delete)
};

