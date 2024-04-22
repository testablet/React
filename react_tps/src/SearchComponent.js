import React, { useState } from 'react';

function SearchComponent({ onSearch }) {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [results, setResults] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${query}`);
            if (!response.ok) {
                throw new Error('Erreur réseau');
            }
            const data = await response.json();
            setResults(data);
            onSearch(data);
        } catch (err) {
            setError('Une erreur est survenue lors de la recherche.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Recherche par ID d'utilisateur..."
                    disabled={loading}
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Recherche en cours...' : 'Rechercher'}
                </button>
            </form>
            <hr></hr>
            {error && <p>{error}</p>}
                {results.map((result) => (
                    <p key={result.id}>{result.title}</p>
                ))}
        </div>
    );
}

export default SearchComponent;
