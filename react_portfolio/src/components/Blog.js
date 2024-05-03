import React, { useState, useEffect } from 'react';
import '../styles/Blog.css';
import { useTheme } from "./ThemeToggle";
import { useTranslation } from "./LanguageToggle";

function LastTenPosts({ posts, showPostDetails, handleAddPost }) {
    const lastTenPosts = posts.slice(-10);
    const { language, translations } = useTranslation();
    const { theme } = useTheme();
    const t = translations[language].blog;

    const [newPostTitle, setNewPostTitle] = useState('');
    const [newPostBody, setNewPostBody] = useState('');
    const [addingPost, setAddingPost] = useState(false);

    const handleChange = (e) => {
        setNewPostTitle(e.target.value);
    };

    const handleTextareaChange = (e) => {
        setNewPostBody(e.target.value);
    };

    const handleSubmit = () => {
        handleAddPost(newPostTitle, newPostBody);
        setNewPostTitle('');
        setNewPostBody('');
        setAddingPost(false);
    };

    return (
        <div className={`blog-container ${theme === 'dark' ? 'theme-dark' : 'theme-light'}`}>
            <h1>{t.title}</h1>
            <div className="add-post-container">
                {addingPost ? (
                    <div>
                        <input
                            type="text"
                            placeholder={t.newPostTitlePlaceholder}
                            value={newPostTitle}
                            onChange={handleChange}
                        />
                        <textarea
                            placeholder={t.newPostBodyPlaceholder}
                            value={newPostBody}
                            onChange={handleTextareaChange}
                        />
                        <button onClick={handleSubmit}>{t.addPost}</button>
                    </div>
                ) : (
                    <button onClick={() => setAddingPost(true)}>{t.addPost}</button>
                )}
            </div>
            <div className="post-list">
                {lastTenPosts.map(post => (
                    <div key={post.id} className="post-card">
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <div className="post-metadata">
                            <p>{t.tags}{post.tags ? post.tags.join(', ') : ''}</p>
                            <p>{t.reactions}<span className="small-text">{post.reactions}</span></p>
                        </div>
                        <button onClick={() => showPostDetails(post.id)}>{t.details}</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

function PostDetails({ post, handleEditPost, handleDeletePost }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedContent, setEditedContent] = useState(post.body);
    const [isExpanded, setIsExpanded] = useState(false);
    const { language, translations } = useTranslation();
    const { theme } = useTheme();
    const t = translations[language].blog;

    const handleChange = (e) => {
        setEditedContent(e.target.value);
        setIsExpanded(true);
    };

    const handleSubmit = () => {
        handleEditPost(post.id, editedContent);
        setIsEditing(false);
    };

    const handleEdit = () => {
        setIsEditing(true);
        setIsExpanded(true);
    };

    const handleDelete = () => {
        handleDeletePost(post.id);
    };

    return (
        <div className={`blog-container ${theme === 'dark' ? 'theme-dark' : 'theme-light'}`}>
            <h1>{t.title}</h1>
            <div className={`post-details ${isExpanded ? 'expanded' : ''}`}>
                {isEditing ? (
                    <div className="post-card">
                        <h2>{t.textEdit}{post.title}</h2>
                        <textarea
                            value={editedContent}
                            onChange={handleChange}
                            style={{
                                height: `${Math.max(150, editedContent.split('\n').length * 20)}px`,
                                width: "90%",
                                maxWidth: "800px",
                                resize: "vertical"
                            }}
                        />
                        <button className="edit-button" onClick={handleSubmit}>{t.save}</button>
                    </div>
                ) : (
                    <div className="post-card">
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <div className="post-metadata">
                            <p>{t.tags}{post.tags ? post.tags.join(', ') : ''}</p>
                            <p>{t.reactions}{post.reactions}</p>
                        </div>
                        <div className="post-actions">
                            <button className="edit-button" onClick={handleEdit}>{t.edit}</button>
                            <button className="delete-button" onClick={handleDelete}>{t.delete}</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

function Blog() {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
    const { language, translations } = useTranslation();
    const { theme } = useTheme();
    const t = translations[language].blog;

    useEffect(() => {
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data.posts));
    }, []);

    const showPostDetails = (postId) => {
        const post = posts.find(post => post.id === postId);
        setSelectedPost(post);
    };

    const handleEditPost = (postId, editedContent) => {
        const updatedPosts = posts.map(post => {
            if (post.id === postId) {
                return { ...post, body: editedContent };
            }
            return post;
        });

        setPosts(updatedPosts);
        setSelectedPost(null);

        console.log(`Modification du post avec l'ID ${postId}. Nouveau contenu : ${editedContent}`);
    };

    const handleDeletePost = (postId) => {
        const updatedPosts = posts.filter(post => post.id !== postId);

        setPosts(updatedPosts);
        setSelectedPost(null);

        console.log(`Suppression du post avec l'ID ${postId}`);
    };

    const handleAddPost = (newPostTitle, newPostBody) => {
        fetch('https://dummyjson.com/posts/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: newPostTitle,
                body: newPostBody,
                userId: 5
            })
        })
            .then(res => res.json())
            .then(newPost => {
                setPosts([...posts, newPost]);
                console.log('Nouveau post ajouté :', newPost);
            });
    };

    return (
        <div>
            {selectedPost ? (
                <PostDetails
                    post={selectedPost}
                    handleEditPost={handleEditPost}
                    handleDeletePost={handleDeletePost}
                />
            ) : (
                <LastTenPosts
                    posts={posts}
                    showPostDetails={showPostDetails}
                    handleAddPost={handleAddPost}
                />
            )}
        </div>
    );
}

export default Blog;
