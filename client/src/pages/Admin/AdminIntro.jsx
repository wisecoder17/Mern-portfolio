import React from 'react'

function AdminIntro() {
    return (
        <div>
            <div className="wrapper">
                <aside class="sidebar">
                    <h2>Admin Panel</h2>
                    <nav>
                        <ul>
                            <li><a href="#">Dashboard</a></li>
                            <li><a href="#">Users</a></li>
                            <li><a href="#">Settings</a></li>
                            <li><a href="#">Reports</a></li>
                            <li><a href="#">Logout</a></li>
                        </ul>
                    </nav>
                </aside>

                <main class="main-content">
                    <header>
                        <h1>Dashboard</h1>
                        <div class="user-profile">
                            <img src={''} alt="User Profile" />
                            <span>Admin</span>
                        </div>
                    </header>
                    <section class="form-section">
                        <h2>Portfolio Details</h2>
                        <form>
                            <label for="first-name">First Name</label>
                            <input type="text" id="first-name" name="first-name" value="" />

                            <label for="last-name">Last Name</label>
                            <input type="text" id="last-name" name="last-name" value="" />

                            <label for="caption">Caption</label>
                            <input type="text" id="caption" name="caption" value="" />

                            <label for="description">Description</label>
                            <textarea id="description" name="description"></textarea>

                            <label for="portfolio-file">Upload Portfolio</label>
                            <input type="file" id="portfolio-file" name="portfolio-file" />

                            <button type="submit">Submit</button>
                        </form>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default AdminIntro