import {API_BACKEND} from '../utils/constants'
import axios from 'axios';

const headers = new Headers({
	'Content-Type': 'application/json',
});

export const Register = async (userInfo) => {
	try {
        
		const response = await fetch(`${API_BACKEND}/signup`, {
			method: 'POST',
			headers,
			body: JSON.stringify(userInfo),
        });

        return await response.json();
        
	} catch (error) {
		return { error, token: null };
	}
};