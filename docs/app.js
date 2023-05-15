document.addEventListener('DOMContentLoaded', () => {
    const projectsListColumn = document.getElementById('projectsListColumn');
    const selectedProjectColumn = document.getElementById('selectedProjectColumn');

    // Replace this with the actual data fetching logic
    async function fetchProjects() {
        return [
            { title: 'Project A', updated: '2023-05-15T16:54:43' },
            { title: 'Project B', updated: '2023-05-15T16:54:30' },
            // ...
        ];
    }

    async function displayProjects() {
        const projects = await fetchProjects();
        projects.sort((a, b) => new Date(b.updated) - new Date(a.updated));

        projects.forEach(project => {
            const projectItem = document.createElement('div');
            projectItem.classList.add('project-item');
            projectItem.textContent = project.title;

            projectItem.addEventListener('click', () => {
                selectedProjectColumn.innerHTML = `
                    <h2>${project.title}</h2>
                    <div class="metadata">
                        <p><strong>Updated:</strong> ${new Date(project.updated).toLocaleString()}</p>
                    </div>
                `;
            });

            projectsListColumn.appendChild(projectItem);
        });
    }

    displayProjects();
});
