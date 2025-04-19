import Image from "next/image";

export default function Home() {
  return (
    // <div className="col-md-8 offset-md-1">
    //   <div className="row">
    //     <div className="col">

    //       <h2 className="fs-3 fw-bold text-primary">
    //         $ ls -la ~/projects
    //       </h2>

    //       {/* Projects grid with improved horizontal centering and default image display */}
    //       <div className="container-fluid">
    //         <div className="project-row" data-bss-type="blog-loop-base">
    //           <div data-bss-type="blog-loop-item">
    //             <div className="card border-0 project-item">
    //               <a className="stretched-link text-decoration-none"
    //                 href="/project/project-1"></a>
    //               <div className="d-flex justify-content-center align-items-center h-200 p-3">
    //                 <Image className="card-img" src="/assets/img/projects/portal.png"
    //                   alt="Student Portal"
    //                   width={500}
    //                   height={350} />
    //               </div>

    //               <div className="card-img-overlay text-white">
    //                 <h4 className="fs-6 fw-bold mb-1">
    //                   Student Portal
    //                 </h4>
    //                 <p className="mb-0">React LMS platform</p>
    //               </div>
    //             </div>
    //           </div>
    //           <div data-bss-type="blog-loop-item">
    //             <div className="card border-0 project-item">
    //               <a className="stretched-link text-decoration-none"
    //                 href="/project/project-3"></a>
    //               <div className="d-flex justify-content-center align-items-center h-200 p-3">
    //                 <Image className="card-img" src="/assets/img/projects/butler.png"
    //                   alt="Job Butler"
    //                   width={500}
    //                   height={350} />
    //               </div>

    //               <div className="project-countdown">
    //                 Coming May 2025
    //               </div>

    //               <div className="card-img-overlay text-white">
    //                 <h4 className="fs-6 fw-bold mb-1">
    //                   Job Butler
    //                 </h4>
    //                 <p className="mb-0">An AI-powered job application assistant</p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //     </div>
    //   </div>
    //   <div className="row">
    //     <div className="col">

    //       <h2 className="fs-3 fw-bold text-primary">
    //         $ ls -la ~/blog
    //       </h2>

    //       {/* Projects grid with improved horizontal centering and default image display */}
    //       <div className="container-fluid">
    //         <div className="project-row" data-bss-type="blog-loop-base">
    //           <div data-bss-type="blog-loop-item">
    //             <div className="card border-0 project-item">
    //               <a className="stretched-link text-decoration-none"
    //                 href="/project/project-3"></a>
    //               <div className="d-flex justify-content-center align-items-center h-200 p-3">
    //                 <Image className="card-img" src="/assets/img/projects/butler.png"
    //                   alt="Job Butler"
    //                   width={500}
    //                   height={350} />
    //               </div>

    //               <div className="project-countdown">
    //                 Coming May 2025
    //               </div>

    //               <div className="card-img-overlay text-white">
    //                 <h4 className="fs-6 fw-bold mb-1">
    //                   Job Butler
    //                 </h4>
    //                 <p className="mb-0">An AI-powered job application assistant</p>
    //               </div>
    //             </div>
    //           </div>
    //           <div data-bss-type="blog-loop-item">
    //             <div className="card border-0 project-item">
    //               <a className="stretched-link text-decoration-none"
    //                 href="/project/project-2"></a>
    //               <div className="d-flex justify-content-center align-items-center h-200 p-3">
    //                 <Image className="card-img" src="/assets/img/projects/portfolio.png"
    //                   alt="Personal Portfolio"
    //                   width={500}
    //                   height={350} />
    //               </div>

    //               <div className="card-img-overlay text-white">
    //                 <h4 className="fs-6 fw-bold mb-1">
    //                   Personal Portfolio
    //                 </h4>
    //                 <p className="mb-0">A statically generated web app</p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //     </div>
    //   </div>
    // </div>
    <div className="col-md-8 offset-md-1">
      <div className="row">
        <div className="col">




          <h2 className="fs-3 fw-bold text-primary terminal-cursor">$ ls -la ~/projects</h2>
          <p className="mb-4">I build innovative web applications and digital solutions that are
            responsive, accessible, and performant. Check out some of my recent projects below:</p>
          <div className="row gx-4 gy-4" role="list"><div className="col-12 col-sm-6 col-lg-4">
            <a className="card-link" href="/project/project-1">
              <div className="card border-0 shadow-sm">
                <div className="position-relative"><Image width={200} height={200} className="card-img-top" alt="E-commerce Platform"
                  src="/assets/img/projects/project1.webp"/>
                </div>
                <div className="card-body px-3 py-2">
                  <h3 className="fw-bold text-primary fs-5 mb-0">E-commerce Platform</h3>
                  <p className="text-muted mb-0">A full-featured e-commerce platform with user authentication, product management, and payment processing</p>
                </div>
              </div>
            </a>
          </div><div className="col-12 col-sm-6 col-lg-4">
              <a className="card-link" href="/project/project-2">
                <div className="card border-0 shadow-sm">
                  <div className="position-relative"><Image width={200} height={200} className="card-img-top" alt="Task_Management_App"
                    src="/assets/img/projects/project2.webp"/>
                  </div>
                  <div className="card-body px-3 py-2">
                    <h3 className="fw-bold text-primary fs-5 mb-0">Task_Management_App</h3>
                    <p className="text-muted mb-0">A modern Kanban-style task management application with real-time updates and team collaboration features</p>
                  </div>
                </div>
              </a>
            </div><div className="col-12 col-sm-6 col-lg-4">
              <a className="card-link" href="/project/project-3">
                <div className="card border-0 shadow-sm">
                  <div className="position-relative"><Image width={200} height={200} className="card-img-top" alt="Neon Sun"
                    src="/assets/img/projects/project3.webp"/>
                  </div>
                  <div className="card-body px-3 py-2">
                    <h3 className="fw-bold text-primary fs-5 mb-0">Neon Sun</h3>
                    <p className="text-muted mb-0">A powerful analytics dashboard for tracking user engagement and app performance</p>
                  </div>
                </div>
              </a>
            </div><div className="col-12 col-sm-6 col-lg-4">
              <a className="card-link" href="/project/project-4">
                <div className="card border-0 shadow-sm">
                  <div className="position-relative"><Image width={200} height={200} className="card-img-top" alt="Fitness_Tracker"
                    src="/assets/img/projects/project4.webp"/>
                  </div>
                  <div className="card-body px-3 py-2">
                    <h3 className="fw-bold text-primary fs-5 mb-0">Fitness_Tracker</h3>
                    <p className="text-muted mb-0">A health &amp; fitness application with workout plans, progress tracking, and data visualization</p>
                  </div>
                </div>
              </a>
            </div><div className="col-12 col-sm-6 col-lg-4">
              <a className="card-link" href="/project/project-5">
                <div className="card border-0 shadow-sm">
                  <div className="position-relative"><Image width={200} height={200} className="card-img-top" alt="Recipe_Finder"
                    src="/assets/img/projects/project5.webp"/>
                  </div>
                  <div className="card-body px-3 py-2">
                    <h3 className="fw-bold text-primary fs-5 mb-0">Recipe_Finder</h3>
                    <p className="text-muted mb-0">A culinary application with recipe search, favorites, and meal planning functionality</p>
                  </div>
                </div>
              </a>
            </div><div className="col-12 col-sm-6 col-lg-4">
              <a className="card-link" href="/project/project-6">
                <div className="card border-0 shadow-sm">
                  <div className="position-relative"><Image width={200} height={200} className="card-img-top" alt="CalmMind"
                    src="/assets/img/projects/project6.webp"/>
                  </div>
                  <div className="card-body px-3 py-2">
                    <h3 className="fw-bold text-primary fs-5 mb-0">CalmMind</h3>
                    <p className="text-muted mb-0">A sleek meditation app focused on mental wellness and mindful practice</p>
                  </div>
                </div>
              </a>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}
