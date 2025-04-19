import Image from "next/image";
import Link from "next/link";
import fetchProject from "./_actions/fetchProject";
import getProjectNavigation from "./_utils/projectNavigation";

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const project = await fetchProject(id);
    const { prevProject, nextProject } = getProjectNavigation(id);

    return (
        <div className="col-md-8 offset-md-1">
            <div className="row">
                <div className="col">

                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb terminal-breadcrumb">
                            <li className="breadcrumb-item"><Link href="/">~</Link></li>
                            <li className="breadcrumb-item"><Link href="/projects">projects</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">{id}</li>
                        </ol>
                    </nav>

                    <h2 className="fs-3 fw-bold text-primary terminal-cursor">$ ls {project.title}/</h2>
                    <p className="mb-4">{project.description}</p>

                    <div className="project-image-container mb-4">
                        <Image
                            width={800}
                            height={450}
                            className="img-fluid border rounded border-0 shadow-sm w-100"
                            src={`/projects/${id.replace('project-', '')}.png`}
                            alt={`Project: ${project.title} - Wessley Nyakanyanga Screenshot`}
                        />
                    </div>

                    {/* Analytics Chart Section - Only render for project-2 */}
                    {id === 'project-2' && (
                        <></>
                    )}

                    <div className="project-details mb-5">
                        <h3 className="fs-5 fw-bold">Project Overview</h3>
                        <p>{project.overview}</p>

                        <h3 className="fs-5 fw-bold">Technologies Used</h3>
                        <div className="tech-stack mb-4">
                            {project.technologies.map((tech: string, index: number) => (
                                <span key={index} className="badge bg-dark me-2 mb-2">{tech}</span>
                            ))}
                        </div>

                        <h3 className="fs-5 fw-bold">Key Features</h3>
                        <ul className="terminal-list">
                            {project.features.map((feature: string, index: number) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>

                        <h3 className="fs-5 fw-bold">Challenges & Solutions</h3>
                        {project.challenges.map((challenge: string, index: number) => (
                            <p key={index}>{challenge}</p>
                        ))}

                        <h3 className="fs-5 fw-bold">Project Links</h3>
                        <div className="d-flex flex-wrap">
                            {project.githubLink && (
                                <Link href={project.githubLink} target="_blank" rel="noopener"
                                    className="btn btn-outline-primary me-3 mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor"
                                        viewBox="0 0 16 16" className="bi bi-github me-2">
                                        <path
                                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z">
                                        </path>
                                    </svg>
                                    View Code
                                </Link>
                            )}
                            {project.demoLink && (
                                <Link href={project.demoLink} target="_blank" rel="noopener"
                                    className="btn btn-outline-primary mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor"
                                        viewBox="0 0 16 16" className="bi bi-link-45deg me-2">
                                        <path
                                            d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z">
                                        </path>
                                        <path
                                            d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z">
                                        </path>
                                    </svg>
                                    Live Demo
                                </Link>
                            )}
                        </div>
                    </div>

                    <div className="project-navigation mt-5">
                        <div className="d-flex justify-content-between">
                            {prevProject ? (
                                <Link href={`/projects/${prevProject.id}`} className="btn btn-outline-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left me-2" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                                    </svg>
                                    Previous: {prevProject.title}
                                </Link>
                            ) : <span></span>}

                            {nextProject ? (
                                <Link href={`/projects/${nextProject.id}`} className="btn btn-outline-secondary">
                                    {nextProject.title}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right ms-2" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                    </svg>
                                </Link>
                            ) : <span></span>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}