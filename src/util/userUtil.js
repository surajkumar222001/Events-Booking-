

export const isLoggedIn = () => {
    return !!localStorage.getItem('events-token');
};

export const getToken = () => {
    return localStorage.getItem('events-token');
}