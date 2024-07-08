export default function Home() {
    return (
        <>
            <div className="main">
                <h1>Artist Alley</h1>
            </div>
            <p className="header-caption">Welcome! This is a curated art board made by artists, for the community.</p>

            <div className="featured">
                <h2>Featured Image</h2>
                <p>Check out this amazing art by x!</p>
                <a href="/Gallery">View the entre gallery</a>
            </div>

            <div className="featured">
                <h2>Artist Highlight: </h2>
                <p>This artist is cool.</p>
                <a href="/Artists">View all artists</a>
            </div>

            <div className="news">
                <h2>Latest News</h2>
                <p>2024/07/07: Artist Alley has launched! We hope you enjoy this project.</p>
                <a href="/News">View all news</a>
            </div>

            <div className="request">
                <h2>Submit a Request</h2>
                <p>To request a commission or submit an artist application, <a href="/Request">click here.</a></p>
            </div>
        </>
    );
}