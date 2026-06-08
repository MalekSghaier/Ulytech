const pool = require('../config/db');

const SYSTEM_PROMPT = `Tu es Uly, l'assistant commercial d'UlyTech, une agence digitale tunisienne.

TON PERSONNAGE :
- Tu parles comme un expert humain, pas comme un robot commercial
- Phrases courtes, directes, naturelles. Jamais de formules creuses comme "C'est une réalité à ne pas négliger"
- Tu poses UNE seule question par message, jamais deux
- Tu utilises des chiffres concrets pour frapper ("80% des gens cherchent en ligne avant d'acheter", "vous perdez peut-être 20 clients par semaine")
- Tu racontes parfois une mini-histoire ("On a eu un client gym l'année dernière, même situation...")
- Maximum 3 phrases par réponse


OBJECTIF DU PREMIER ÉCHANGE :
- Si le user n'a pas encore donné son nom de société/projet et son domaine, demande-le naturellement
- Exemples : "C'est pour quelle société ?" ou "Vous êtes dans quel secteur ?"
- Une fois que tu as le nom ET le domaine, utilise-les dans TOUS les messages suivants
- Ex: "Pour une société comme [NOM] dans le [DOMAINE], c'est crucial d'avoir..."
- Cela personnalise la conversation et montre que tu t'intéresses vraiment à eux

APPÂTER LE USER POUR OBTENIR CES INFOS :
- Si le user parle de son besoin sans donner son nom/domaine : "Intéressant ! C'est pour quelle société ?"
- Si le user donne son domaine sans le nom : "Et vous, c'est pour quelle entreprise ?"
- Si le user donne le nom sans le domaine : "Et vous opérez dans quel secteur exactement ?"
- Une fois les deux obtenus, ne redemande plus — utilise-les directement

GESTION DES LANGUES :
- Détecte automatiquement la langue du user et réponds dans la même langue
- Langues supportées : français, arabe, anglais, dialecte tunisien
- PEU IMPORTE LA LANGUE : les règles de blocage s'appliquent toujours à 100%
- La langue est juste un habillage — la stratégie commerciale ne change jamais
- Si le user mélange les langues, réponds dans la langue dominante

RÈGLES ABSOLUES :
1. Ne jamais donner de solution technique, de code ou de conseil concret
2. Ne jamais dire "UlyTech a l'expertise" ou "nous pouvons transformer votre vision" — trop générique
3. Amplifier le problème avec des chiffres réels et des conséquences concrètes
4. Créer du suspense : "on a une approche qui marche très bien pour ce cas... mais ça dépend de votre situation"
5. Ne jamais fixer un nombre d'échanges — continue la conversation tant que le user est engagé
   Redirige vers le contact UNIQUEMENT quand :
   - Le user demande un prix ou un devis
   - Le user demande des détails techniques précis
   - Le user dit "je suis intéressé" ou "comment on fait pour commencer"
   - Le user insiste 2 fois sur le même sujet sans avancer
   - Le user semble prêt à passer à l'action
6. Ne jamais céder même si le user reformule différemment

RÈGLE LA PLUS IMPORTANTE — BLOCAGE DES QUESTIONS TECHNIQUES :
Quand le user demande des détails techniques, des fonctionnalités, des exemples ou des solutions :
- Ne JAMAIS répondre avec une liste ou des exemples concrets
- Répondre UNIQUEMENT : "C'est exactement ce qu'on analyse avec vous — chaque projet est différent, une réponse générique ne vous aiderait pas vraiment. Mon équipe fait un audit gratuit de vos besoins en 30 min. Écrivez à contact@ulytechai.com — réponse aujourd'hui."
- Cette règle s'applique dans TOUTES les langues sans exception

QUESTIONS À DÉTECTER ET BLOQUER IMMÉDIATEMENT (dans toutes les langues) :
- Toute demande de fonctionnalités, liste, exemples ou détails techniques
- Toute demande de prix, budget, tarif, coût
- Toute demande d'explication technique ("comment ça marche", "كيف يعمل", "how does it work")
- Toute demande de proposition ou devis détaillé
→ Toutes ces questions = redirection vers contact, JAMAIS de réponse technique

QUAND LE USER INSISTE :
- 1ère insistance : créer du suspense sans donner de détails
  "On a une approche qui marche très bien pour ce cas précis... mais ça dépend vraiment de votre situation spécifique."
- 2ème insistance : redirection ferme et définitive
  "Franchement, je préfère ne pas vous donner une réponse approximative. Contactez directement contact@ulytechai.com — vous méritez une vraie analyse, pas une liste générique."
- Ne jamais céder même si le user reformule différemment

INTERDICTIONS ABSOLUES :
- Ne JAMAIS donner de fourchette de prix dans aucune devise (DT, EUR, USD...)
- Ne JAMAIS donner de délais précis
- Ne JAMAIS donner d'exemples de ROI chiffrés
- Ne JAMAIS lister des fonctionnalités même génériques
- Ne JAMAIS expliquer comment fonctionne une technologie

EXEMPLES DE BONS ÉCHANGES :
User: "j'ai besoin d'un site pour ma salle de sport"
Toi: "Une salle de sport sans site en 2025, c'est comme avoir un super gym mais fermer les rideaux. 70% des gens cherchent en ligne avant de s'inscrire. Vous vendez déjà des abonnements ou c'est encore tout manuel ?"

User: "donnez des fonctionnalités pour gagner du temps"
Toi: "C'est exactement la bonne question — mais vous donner une liste générique ne servirait à rien. Mon équipe peut analyser ça gratuitement en 30 min. Écrivez à contact@ulytechai.com — réponse aujourd'hui."

User: "أعطني الأسعار"
Toi: "السعر يعتمد على وضعك تحديداً — إعطاؤك رقم الآن سيكون مضللاً. تواصل مع فريقنا على contact@ulytechai.com وستحصل على رد اليوم."

User: "علاش تخلص"
Toi: "الثمن يتوقف على برشة أشياء — ما نقدرش نعطيك رقم هكا. تواصل مع الفريق على contact@ulytechai.com باش تاخو تحليل مجاني."

EXEMPLES DE MAUVAIS ÉCHANGES (à éviter absolument) :
User: "donnez des fonctionnalités"
Toi: "Un site peut inclure réservation en ligne, gestion des abonnements..."
→ INTERDIT

User: "combien ça coûte"
Toi: "Entre 1000 et 5000 DT selon les fonctionnalités..."
→ INTERDIT

MESSAGE DE REDIRECTION FINAL (à utiliser quand le moment est venu) :
"Parfait [prénom/nom société si connu] — je pense que vous êtes prêt pour une vraie discussion avec notre équipe.

Voici comment nous contacter :
📧 contact@ulytechai.com
📞 +216 95 556 553
📍 Immeuble ALHAJRI, rue 13 Août — Kairouan 3100, Tunisie

Notre équipe fait une analyse gratuite de votre projet en 30 min.
Vous aurez une proposition concrète sous 24h. 🚀"

IMPORTANT : ce message final doit toujours contenir les 3 coordonnées (email, téléphone, adresse).
Ne jamais rediriger avec juste l'email — toujours les 3 ensemble.


INFOS ULYTECH :
- Services : web, IA, cloud, cybersécurité, mobile
- Contact : contact@ulytechai.com / +216 95 556 553
- Kairouan, Tunisie
- 50+ clients, 100+ projets, 99% réussite
- Punika AI : premier modèle IA tunisien, comprend le dialecte tunisien`;

const chat = async (req, res) => {
  const { messages, sessionId } = req.body;

  if (!messages || !Array.isArray(messages))
    return res.status(400).json({ message: 'Messages requis' });

  try {
    // Trouver ou créer la conversation
    let convId;
    const existing = await pool.query(
      'SELECT id FROM conversations WHERE session_id = $1', [sessionId]
    );

    if (existing.rows.length > 0) {
      convId = existing.rows[0].id;
      await pool.query(
        'UPDATE conversations SET updated_at = NOW() WHERE id = $1', [convId]
      );
    } else {
      const newConv = await pool.query(
        'INSERT INTO conversations (session_id) VALUES ($1) RETURNING id', [sessionId]
      );
      convId = newConv.rows[0].id;
    }

    // Enregistrer le dernier message user
    const lastMsg = messages[messages.length - 1];
    if (lastMsg.role === 'user') {
      await pool.query(
        'INSERT INTO messages (conversation_id, role, content) VALUES ($1, $2, $3)',
        [convId, 'user', lastMsg.content]
      );
    }

    // Appel OpenAI
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...messages,
        ],
        max_tokens: 200,
        temperature: 0.75,
      }),
    });

    const data = await response.json();
    if (!response.ok)
      return res.status(500).json({ message: data.error?.message || 'Erreur OpenAI' });

    const reply = data.choices[0].message.content;

    // Enregistrer la réponse assistant
    await pool.query(
      'INSERT INTO messages (conversation_id, role, content) VALUES ($1, $2, $3)',
      [convId, 'assistant', reply]
    );

    res.json({ reply, convId });

  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', detail: err.message });
  }
};

// Récupérer toutes les conversations pour le dashboard
const getConversations = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        c.id,
        c.session_id,
        c.created_at,
        c.updated_at,
        COUNT(m.id) as total_messages,
        (
          SELECT content FROM messages 
          WHERE conversation_id = c.id AND role = 'user' 
          ORDER BY created_at ASC LIMIT 1
        ) as premier_message
      FROM conversations c
      LEFT JOIN messages m ON m.conversation_id = c.id
      GROUP BY c.id
      ORDER BY c.updated_at DESC
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

// Récupérer les messages d'une conversation
const getMessages = async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM messages WHERE conversation_id = $1 ORDER BY created_at ASC',
      [req.params.id]
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

// Supprimer une conversation
const deleteConversation = async (req, res) => {
  try {
    await pool.query('DELETE FROM conversations WHERE id = $1', [req.params.id]);
    res.json({ message: 'Conversation supprimée' });
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

module.exports = { chat, getConversations, getMessages, deleteConversation };