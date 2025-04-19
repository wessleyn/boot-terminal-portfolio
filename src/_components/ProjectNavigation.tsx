'use client';

import Link from 'next/link';

interface ProjectLink {
    id: string;
    title: string;
}

interface ProjectNavigationProps {
    prevProject: ProjectLink | null;
    nextProject: ProjectLink | null;
    className?: string;
}

const ProjectNavigation = ({
    prevProject,
    nextProject,
    className = 'mt-5'
}: ProjectNavigationProps) => {
    return (
        <div className={`project-navigation ${className}`}>
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
    );
};

export default ProjectNavigation;