const BASE_URL = 'http://localhost:5000/api';

async function request(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) {
    const message = await res.text().catch(() => res.statusText);
    throw new Error(message || `Request failed: ${res.status}`);
  }
  return res.status === 204 ? null : res.json();
}

export const getProjects = () => request('/projects');
export const createProject = (data) =>
  request('/projects', { method: 'POST', body: JSON.stringify(data) });
export const updateProject = (id, data) =>
  request(`/projects/${id}`, { method: 'PUT', body: JSON.stringify(data) });
export const deleteProject = (id) =>
  request(`/projects/${id}`, { method: 'DELETE' });