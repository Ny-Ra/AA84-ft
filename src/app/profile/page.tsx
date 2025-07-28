export default function ProfilePage() {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Profil Utilisateur</h1>
      <div style={{ marginTop: '2rem' }}>
        <h2>Informations personnelles</h2>
        <p>Nom : John Doe</p>
        <p>Email : john.doe@example.com</p>
        <p>Téléphone : +33 1 23 45 67 89</p>
      </div>
      <div style={{ marginTop: '2rem' }}>
        <h2>Paramètres du compte</h2>
        <button style={{ 
          padding: '0.5rem 1rem', 
          marginRight: '1rem',
          backgroundColor: '#f3f4f6',
          border: '1px solid #d1d5db',
          borderRadius: '0.5rem',
          cursor: 'pointer'
        }}>
          Modifier le profil
        </button>
        <button style={{ 
          padding: '0.5rem 1rem',
          backgroundColor: '#f3f4f6',
          border: '1px solid #d1d5db',
          borderRadius: '0.5rem',
          cursor: 'pointer'
        }}>
          Changer le mot de passe
        </button>
      </div>
    </div>
  );
}