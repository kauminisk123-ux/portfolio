import { useEffect, useState } from 'react';
import { getProjects, createProject, updateProject, deleteProject } from '../api';
import './Admin.css';

const emptyForm = { title: '', description: '', technologies: '', link: '' };

function Admin() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');

  const loadProjects = () => {
    setLoading(true);
    getProjects()
      .then(setProjects)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(loadProjects, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setForm(emptyForm);
    setEditingId(null);
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError(null);

    const payload = {
      title: form.title.trim(),
      description: form.description.trim(),
      technologies: form.technologies.split(',').map((t) => t.trim()).filter(Boolean),
      link: form.link.trim(),
    };

    try {
      if (editingId) {
        await updateProject(editingId, payload);
        setMessage('✅ Project updated successfully!');
      } else {
        await createProject(payload);
        setMessage('✅ Project added successfully!');
      }
      resetForm();
      loadProjects();
      setTimeout(() => setMessage(''), 3000);
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (project) => {
    setEditingId(project._id);
    setForm({
      title: project.title,
      description: project.description,
      technologies: (project.technologies || []).join(', '),
      link: project.link || '',
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this project?')) return;
    try {
      await deleteProject(id);
      setMessage('🗑️ Project deleted successfully!');
      loadProjects();
      setTimeout(() => setMessage(''), 3000);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section className="admin-page">
      <div className="admin-container">
        <div className="admin-header">
          <h1>Admin Panel</h1>
          <div className="header-underline"></div>
          <p>Manage your projects - add, edit, or delete</p>
        </div>

        {message && <div className="admin-message success">{message}</div>}
        {error && <div className="admin-message error">{error}</div>}

        {/* Form */}
        <div className="admin-form-card">
          <h2>{editingId ? '✏️ Edit Project' : '➕ Add New Project'}</h2>
          <form onSubmit={handleSubmit} className="admin-form">
            <div className="form-group">
              <label>📝 Project Title</label>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                required
                placeholder="Enter project title"
              />
            </div>

            <div className="form-group">
              <label>📄 Description</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                required
                placeholder="Enter project description"
                rows="3"
              />
            </div>

            <div className="form-group">
              <label>🛠️ Technologies (comma separated)</label>
              <input
                type="text"
                name="technologies"
                value={form.technologies}
                onChange={handleChange}
                placeholder="e.g., React, Node.js, MongoDB"
              />
            </div>

            <div className="form-group">
              <label>🔗 GitHub Link</label>
              <input
                type="url"
                name="link"
                value={form.link}
                onChange={handleChange}
                placeholder="https://github.com/username/project"
              />
            </div>

            <div className="form-buttons">
              <button type="submit" className="btn-save" disabled={saving}>
                {saving ? '💾 Saving...' : editingId ? '💾 Update Project' : '💾 Save Project'}
              </button>
              <button type="button" className="btn-reset" onClick={resetForm}>
                ❌ Cancel
              </button>
            </div>
          </form>
        </div>

        {/* Projects List */}
        <div className="admin-list">
          <h2>📂 All Projects</h2>
          
          {loading && <p className="admin-status">Loading...</p>}
          {!loading && projects.length === 0 && (
            <p className="admin-status">No projects yet. Add one above!</p>
          )}

          <div className="admin-grid">
            {projects.map((project) => (
              <div key={project._id} className="admin-project-item">
                <div className="admin-project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description.substring(0, 80)}...</p>
                  <div className="admin-tech-tags">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="admin-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="admin-project-actions">
                  <button onClick={() => handleEdit(project)} className="btn-edit">
                    ✏️ Edit
                  </button>
                  <button onClick={() => handleDelete(project._id)} className="btn-delete">
                    🗑️ Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Admin;