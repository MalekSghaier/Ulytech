--
-- PostgreSQL database dump
--

\restrict etxB8cN5pSMjPdSixxMGdPd4XrUX0h7Atw5x6XZuUfqwOPwQBKqqXNDvWgPgErB

-- Dumped from database version 18.3
-- Dumped by pg_dump version 18.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: applications; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.applications (id, nom, description, url_site, url_repo, categorie, technologies, statut, created_at) FROM stdin;
2	Compaai	Comparez vos factures fournisseurs avec pr├®cision gr├óce ├á l'intelligence artificielle et l'OCR avanc├®.	https://compaai.ulytechai.com/	https://github.com/MalekSghaier/Magriplast_comparator	Intelligence Artificielle	{Python,ReactJS}	production	2026-06-04 12:47:51.215607
\.


--
-- Data for Name: app_screenshots; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.app_screenshots (id, app_id, image, ordre, created_at) FROM stdin;
11	2	/uploads/apps/1780570071155-570868061.PNG	0	2026-06-04 12:47:51.22564
12	2	/uploads/apps/1780570071166-928568505.PNG	1	2026-06-04 12:47:51.228823
13	2	/uploads/apps/1780570071167-981251898.PNG	2	2026-06-04 12:47:51.229136
14	2	/uploads/apps/1780570071170-213395014.PNG	3	2026-06-04 12:47:51.229706
15	2	/uploads/apps/1780570071173-365927406.PNG	4	2026-06-04 12:47:51.229957
16	2	/uploads/apps/1780570071174-924624268.PNG	5	2026-06-04 12:47:51.230186
17	2	/uploads/apps/1780570071175-569718376.PNG	6	2026-06-04 12:47:51.23039
18	2	/uploads/apps/1780570071176-515798923.PNG	7	2026-06-04 12:47:51.230622
19	2	/uploads/apps/1780570071177-884813662.PNG	8	2026-06-04 12:47:51.230959
20	2	/uploads/apps/1780570071180-794764719.PNG	9	2026-06-04 12:47:51.232215
\.


--
-- Data for Name: clients; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.clients (id, nom, contact, email, ville, logo, site_web, created_at) FROM stdin;
1	BH BANK	Meftah Ziadi 	Contact@bhbank.tn	Tunis	/uploads/clients/1780498054540-229692941.png	https://www.bhbank.tn/	2026-06-03 16:47:34.583459
2	ARS Tunisie	Cyrine Hafaiedh	Contact@arstunisie.com	Tunis	/uploads/clients/1780498440760-78382050.png	https://www.arstunisie.com/	2026-06-03 16:54:00.804173
3	Suzuki Tunisie 	\N	70 603 500	Tunis	/uploads/clients/1780498790733-656861249.png	https://www.suzuki.tn/	2026-06-03 16:59:50.912046
4	 MAGRIPLAST 	\N	+216 70 603 400	Tunis	/uploads/clients/1780499186244-146827292.PNG	https://utic.tn/societes/magriplast/	2026-06-03 17:06:26.388972
5	Sotradies	\N	sotradies@utic.com.tn	Tunis	/uploads/clients/1780499914670-307351918.png	https://www.sotradies.tn/	2026-06-03 17:18:34.757129
\.


--
-- Data for Name: conversations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.conversations (id, session_id, created_at, updated_at) FROM stdin;
2	sess_1780587620203_ox94ec5402	2026-06-04 17:40:37.601799	2026-06-04 17:40:52.320454
1	sess_1780587001432_tqpq5qcoy29	2026-06-04 17:36:58.227954	2026-06-05 14:52:10.246324
3	sess_1780664056140_r2hl77221kp	2026-06-05 14:54:25.65401	2026-06-05 14:54:25.65401
4	sess_1780665646296_uiarb2tkdqj	2026-06-05 15:21:36.628567	2026-06-05 15:22:39.776393
5	sess_1780913228642_hurleg89ljd	2026-06-08 12:22:04.326693	2026-06-08 12:22:30.012775
6	sess_1781011240693_o3vajobz9ej	2026-06-09 15:35:23.90292	2026-06-09 15:35:23.90292
\.


--
-- Data for Name: messages; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.messages (id, conversation_id, role, content, created_at) FROM stdin;
1	1	user	Bonjour j'ai besoin d'un site e-commerce	2026-06-04 17:36:58.242814
2	1	assistant	Avoir un site e-commerce, cÔÇÖest essentiel aujourd'hui. Plus de 80% des consommateurs cherchent en ligne avant d'acheter. Vous avez d├®j├á des produits pr├¬ts ├á vendre ou c'est juste une id├®e pour le moment ?	2026-06-04 17:36:59.866379
3	1	user	Je vends des v├¬tements	2026-06-04 17:37:10.676867
4	1	assistant	C'est un march├® en pleine croissance ! Mais sans site, vous pourriez perdre jusqu'├á 20 clients par semaine. Vous avez d├®j├á une strat├®gie marketing en place pour attirer des visiteurs ?	2026-06-04 17:37:12.73204
5	1	user	J'ai environ 200 produits	2026-06-04 17:37:31.91896
6	1	assistant	CÔÇÖest un bon nombre ! Mais g├®rer 200 produits sans un site optimis├®, c'est risquer des erreurs et des ventes manqu├®es. Vous avez pens├® ├á comment vous allez g├®rer les commandes et les livraisons ?	2026-06-04 17:37:33.657991
7	1	user	donnez des fonctionnalit├®s pour mon site comme il peut optimiser mon temps et me laisser gagner d argent	2026-06-04 17:38:14.456698
8	1	assistant	C'est exactement ce qu'on analyse avec vous ÔÇö chaque projet est diff├®rent, une r├®ponse g├®n├®rique ne vous aiderait pas vraiment. Mon ├®quipe fait un audit gratuit de vos besoins en 30 min. ├ëcrivez ├á kaissafouene@ulytech.tn ÔÇö r├®ponse aujourd'hui.	2026-06-04 17:38:16.137089
9	1	user	combien ├ºa coute un site e commerce complet	2026-06-04 17:38:40.017401
10	1	assistant	Le prix d├®pend de votre situation sp├®cifique ÔÇö vous donner un chiffre maintenant serait trompeur. Contactez notre ├®quipe ├á kaissafouene@ulytech.tn pour une analyse gratuite et pr├®cise. Vous m├®ritez une vraie r├®ponse !	2026-06-04 17:38:41.470287
11	2	user	Bonjour je cherche une application mobile pour ma salle de sport	2026-06-04 17:40:37.61897
12	2	assistant	Une application mobile pour une salle de sport, c'est essentiel aujourd'hui ! 80% des utilisateurs pr├®f├¿rent g├®rer leurs abonnements en ligne. Vous avez d├®j├á pens├® ├á ce que vous voudriez offrir dans cette appli ?	2026-06-04 17:40:39.238486
13	2	user	9adech tetkallef ??	2026-06-04 17:40:52.325673
14	2	assistant	Le co├╗t d├®pend vraiment de votre situation sp├®cifique ÔÇö donner un chiffre maintenant serait impr├®cis. Contactez mon ├®quipe ├á kaissafouene@ulytech.tn pour une analyse gratuite en 30 min. Vous aurez une r├®ponse aujourd'hui.	2026-06-04 17:40:54.021947
15	1	user	asslema	2026-06-05 11:29:53.360666
16	1	assistant	Asslema ! Quel est votre projet ou besoin digital actuel ?	2026-06-05 11:29:56.642129
17	1	user	a7kili bel tounsi	2026-06-05 11:30:04.508858
18	1	assistant	Bien s├╗r ! Ï┤┘å┘ê┘æÏ® Ïº┘äÏ¬Ï¡Ï»┘èÏºÏ¬ Ïº┘ä┘ä┘è Ï¬┘êÏºÏ¼┘ç┘ç┘à ┘ü┘è ┘àÏ┤Ï▒┘êÏ╣┘â Ïº┘äÏ▒┘é┘à┘è Ïƒ	2026-06-05 11:30:06.178049
19	1	user	n7eb na3me site lel salle de sport mta3i	2026-06-05 11:30:20.075039
20	1	assistant	┘à┘àÏ¬ÏºÏ▓! 70% ┘à┘å Ïº┘ä┘åÏºÏ│ ┘èÏ¿Ï¡Ï½┘êÏº Ï╣┘ä┘ë Ïº┘äÏÑ┘åÏ¬Ï▒┘åÏ¬ ┘éÏ¿┘ä ┘àÏº ┘èÏ┤Ï¬Ï▒┘â┘êÏº ┘ü┘è ┘éÏºÏ╣Ï® Ï▒┘èÏºÏÂ┘èÏ®. Ï┤┘å┘ê┘æÏ® Ïº┘äÏ«Ï»┘àÏºÏ¬ Ïº┘ä┘ä┘è Ï¬┘éÏ»┘à┘çÏº ┘ü┘è Ïº┘äÏÁÏº┘äÏ® ┘àÏ¬ÏºÏ╣┘â Ïƒ	2026-06-05 11:30:21.567455
21	1	user	chnoua les fonctionnalit├®s eli na3melhom	2026-06-05 11:31:01.212172
22	1	assistant	┘çÏ░┘è ┘ç┘è Ïº┘äÏ│ÏñÏº┘ä Ïº┘ä┘à┘ç┘àÏî ┘ä┘â┘å Ï¬┘éÏ»┘è┘à ┘éÏºÏª┘àÏ® Ï╣Ïº┘àÏ® ┘àÏº ┘è┘åÏ¼┘àÏ┤ ┘èÏ│ÏºÏ╣Ï»┘â. ┘åÏ¼┘à┘êÏº ┘åÏ¡┘ä┘ä┘êÏº ÏºÏ¡Ï¬┘èÏºÏ¼ÏºÏ¬┘â ┘ü┘è 30 Ï»┘é┘è┘éÏ®. Ïº┘âÏ¬Ï¿ ┘ä┘åÏº Ï╣┘ä┘ë kaissafouene@ulytech.tnÏî ┘ê┘åÏ¼┘êÏ¿┘â Ïº┘ä┘è┘ê┘à.	2026-06-05 11:31:03.461243
23	1	user	b9adech yetkalef	2026-06-05 11:31:13.033785
24	1	assistant	Ïº┘äÏ│Ï╣Ï▒ ┘èÏ╣Ï¬┘àÏ» Ï╣┘ä┘ë ┘êÏÂÏ╣┘â Ï¬Ï¡Ï»┘èÏ»Ïº┘ï ÔÇö ÏÑÏ╣ÏÀÏºÏñ┘â Ï▒┘é┘à Ïº┘äÏó┘å Ï│┘è┘â┘ê┘å ┘àÏÂ┘ä┘äÏº┘ï. Ï¬┘êÏºÏÁ┘ä ┘àÏ╣ ┘üÏ▒┘è┘é┘åÏº Ï╣┘ä┘ë kaissafouene@ulytech.tn ┘êÏ│Ï¬Ï¡ÏÁ┘ä Ï╣┘ä┘ë Ï▒Ï» Ïº┘ä┘è┘ê┘à.	2026-06-05 11:31:14.715656
25	1	user	bonjour je veux cr├®er un site web pour ma societe	2026-06-05 11:51:23.740811
26	1	assistant	Bonjour ! Int├®ressant ! C'est pour quelle soci├®t├® ?	2026-06-05 11:51:25.312546
27	1	user	ma soci├®te de livraison	2026-06-05 11:51:45.39308
28	1	assistant	Super, une soci├®t├® de livraison ! ├ça doit ├¬tre comp├®titif. Vous ├¬tes dans quel secteur exactement ?	2026-06-05 11:51:47.712901
29	1	user	textille	2026-06-05 11:52:06.942486
30	1	assistant	Pour une soci├®t├® de livraison dans le textile, c'est crucial d'avoir un site qui attire les clients. 80% des gens cherchent en ligne avant d'acheter. Vous avez d├®j├á une id├®e des fonctionnalit├®s que vous aimeriez int├®grer ?	2026-06-05 11:52:08.519298
31	1	user	proposer des fonctionnalit├®s	2026-06-05 11:52:24.025599
32	1	assistant	C'est exactement ce qu'on analyse avec vous. Chaque projet est diff├®rent, une r├®ponse g├®n├®rique ne vous aiderait pas vraiment. Mon ├®quipe fait un audit gratuit de vos besoins en 30 min. ├ëcrivez ├á kaissafouene@ulytech.tn ÔÇö r├®ponse aujourd'hui.	2026-06-05 11:52:25.453617
33	1	user	le prix	2026-06-05 11:52:52.053659
34	1	assistant	Le prix d├®pend de votre situation sp├®cifique ÔÇö vous donner un chiffre maintenant serait trompeur. Contactez directement kaissafouene@ulytech.tn pour une analyse pr├®cise de votre projet. Vous m├®ritez une vraie discussion.	2026-06-05 11:52:53.117164
35	1	user	ok	2026-06-05 11:52:57.796639
36	1	assistant	Parfait ! Je pense que vous ├¬tes pr├¬t pour une vraie discussion avec notre ├®quipe.\n\nVoici comment nous contacter :\n­ƒôº kaissafouene@ulytech.tn  \n­ƒô× +216 99 613 615  \n­ƒôì Immeuble ALHAJRI, rue 13 Ao├╗t ÔÇö Kairouan 3100, Tunisie  \n\nNotre ├®quipe fait une analyse gratuite de votre projet en 30 min. Vous aurez une proposition concr├¿te sous 24h. ­ƒÜÇ	2026-06-05 11:52:59.786783
37	1	user	bonjour	2026-06-05 13:52:51.687505
38	1	assistant	Bonjour ! Je suis l├á pour vous aider. Pour quel projet ou soci├®t├® avez-vous besoin d'assistance ?	2026-06-05 13:52:54.206539
39	1	user	je veux cr├®er une application mobile pour ma salle de sport	2026-06-05 13:53:09.091852
40	1	assistant	Int├®ressant ! C'est pour quelle salle de sport ?	2026-06-05 13:53:10.203987
41	1	user	ma salle de sport	2026-06-05 13:53:20.149576
42	1	assistant	Et vous, dans quel secteur ├¬tes-vous exactement ?	2026-06-05 13:53:21.368658
43	1	user	sport	2026-06-05 13:53:36.929089
44	1	assistant	Pour une salle de sport, avoir une application mobile est essentiel. Saviez-vous que 80% des utilisateurs pr├®f├¿rent g├®rer leurs abonnements en ligne ? Vous offrez d├®j├á des services en ligne ou c'est encore tout manuel ?	2026-06-05 13:53:37.945493
45	1	user	proposez une application comment elle est pour une salle de sport	2026-06-05 13:54:12.316178
46	1	assistant	C'est exactement ce qu'on analyse avec vous ÔÇö chaque projet est diff├®rent, une r├®ponse g├®n├®rique ne vous aiderait pas vraiment. Mon ├®quipe fait un audit gratuit de vos besoins en 30 min. ├ëcrivez ├á kaissafouene@ulytech.tn ÔÇö r├®ponse aujourd'hui.	2026-06-05 13:54:13.475438
47	1	user	donner des hint	2026-06-05 13:54:23.129759
48	1	assistant	On a une approche qui marche tr├¿s bien pour ce cas pr├®cis... mais ├ºa d├®pend vraiment de votre situation sp├®cifique. Contactez directement kaissafouene@ulytech.tn ÔÇö vous m├®ritez une vraie analyse, pas une liste g├®n├®rique.	2026-06-05 13:54:24.208147
49	1	user	prix	2026-06-05 13:54:29.664055
50	1	assistant	Franchement, je pr├®f├¿re ne pas vous donner une r├®ponse approximative. Contactez directement kaissafouene@ulytech.tn ÔÇö vous m├®ritez une vraie analyse, pas une liste g├®n├®rique.	2026-06-05 13:54:32.298378
51	1	user	d accord	2026-06-05 13:54:36.95276
52	1	assistant	Parfait ! Je pense que vous ├¬tes pr├¬t pour une vraie discussion avec notre ├®quipe.\n\nVoici comment nous contacter :\n­ƒôº kaissafouene@ulytech.tn  \n­ƒô× +216 99 613 615  \n­ƒôì Immeuble ALHAJRI, rue 13 Ao├╗t ÔÇö Kairouan 3100, Tunisie  \n\nNotre ├®quipe fait une analyse gratuite de votre projet en 30 min. Vous aurez une proposition concr├¿te sous 24h. ­ƒÜÇ	2026-06-05 13:54:38.655183
53	1	user	bye	2026-06-05 13:54:41.630579
54	1	assistant	Au revoir ! N'h├®sitez pas ├á revenir si vous avez d'autres questions. Bonne journ├®e ! ­ƒîƒ	2026-06-05 13:54:42.485416
55	1	user	salemou alaykommm	2026-06-05 14:50:05.829184
56	1	assistant	Wa alaykom as-salam ! Je suis ravi de discuter avec vous. Pour mieux comprendre vos besoins, c'est pour quelle soci├®t├® ou projet ?	2026-06-05 14:50:08.709313
57	1	user	n7eb ne3mel syte waab lel socita mta3i	2026-06-05 14:50:37.249211
58	1	assistant	Int├®ressant ! C'est pour quelle soci├®t├® ?	2026-06-05 14:50:37.835724
59	1	user	chado confection	2026-06-05 14:50:58.675617
60	1	assistant	Pour une soci├®t├® comme Chado Confection, avoir un site web est essentiel. 80% des consommateurs cherchent en ligne avant d'acheter. Vous vendez d├®j├á vos produits en ligne ou c'est encore tout manuel ?	2026-06-05 14:51:00.089938
61	1	user	mannuel	2026-06-05 14:51:16.154486
62	1	assistant	Avec un processus manuel, vous pourriez perdre beaucoup de clients potentiels chaque semaine. On a aid├® un client dans le secteur textile ├á passer au digital et ses ventes ont r├®ellement explos├®. Avez-vous d├®j├á envisag├® des options pour automatiser vos ventes ?	2026-06-05 14:51:18.005432
63	1	user	oui	2026-06-05 14:51:24.858846
64	1	assistant	C'est un bon d├®but ! Pour Chado Confection, une solution digitale pourrait vraiment faire la diff├®rence. On a une approche qui marche tr├¿s bien pour ce cas pr├®cis... mais ├ºa d├®pend vraiment de votre situation sp├®cifique. Que priorisez-vous, la vente en ligne ou la gestion des commandes ?	2026-06-05 14:51:26.233134
65	1	user	je vais suivie des presences des employes	2026-06-05 14:51:56.827524
66	1	assistant	Suivre les pr├®sences des employ├®s est crucial pour une gestion efficace. Une solution digitale pourrait r├®duire vos t├óches manuelles et vous faire gagner du temps. Avez-vous d├®j├á pens├® ├á int├®grer un module de gestion des ressources humaines sur votre site ?	2026-06-05 14:51:58.102006
67	1	user	nn	2026-06-05 14:52:06.487396
68	1	assistant	C'est une opportunit├® ├á explorer ! En int├®grant un module de gestion des pr├®sences, vous pourriez automatiser ce suivi et ├®viter des erreurs. Pour une soci├®t├® comme Chado Confection, cela pourrait vraiment am├®liorer votre efficacit├®. Vous seriez ouvert ├á en discuter davantage avec notre ├®quipe ?	2026-06-05 14:52:09.162599
69	1	user	ok	2026-06-05 14:52:10.254933
70	1	assistant	Parfait, Chado Confection semble pr├¬t pour une vraie transformation ! Voici comment nous contacter pour une analyse gratuite de votre projet :\n\n­ƒôº kaissafouene@ulytech.tn  \n­ƒô× +216 99 613 615  \n­ƒôì Immeuble ALHAJRI, rue 13 Ao├╗t ÔÇö Kairouan 3100, Tunisie  \n\nNotre ├®quipe peut vous fournir une proposition concr├¿te sous 24h. ­ƒÜÇ	2026-06-05 14:52:12.994876
71	3	user	bonjour	2026-06-05 14:54:25.67666
72	3	assistant	Bonjour ! Je suis l├á pour vous aider. Pour quel projet ou quelle soci├®t├® avez-vous besoin d'assistance ?	2026-06-05 14:54:27.005016
73	4	user	pssst	2026-06-05 15:21:36.645669
74	4	assistant	Psst, oui ? Que puis-je faire pour vous ?	2026-06-05 15:21:38.912713
75	4	user	comment je peux integrir  le AI dans ma soci├®t├®	2026-06-05 15:22:39.790987
76	4	assistant	C'est un sujet int├®ressant ! Mais avant de parler d'int├®gration, pouvez-vous me dire le nom de votre soci├®t├® et le secteur dans lequel vous op├®rez ?	2026-06-05 15:22:41.225447
77	5	user	bonjour	2026-06-08 12:22:04.357148
78	5	assistant	Bonjour ! Je suis Uly, l'assistant d'UlyTech. Pour mieux comprendre vos besoins, c'est pour quelle soci├®t├® ou projet que vous cherchez de l'aide ?	2026-06-08 12:22:07.211402
79	5	user	je veux faire un site web pour ma salle de fetes	2026-06-08 12:22:30.030275
80	5	assistant	Int├®ressant ! Pour une salle de f├¬tes, avoir un site web est crucial. 80% des gens cherchent en ligne avant de r├®server un espace. C'est pour quelle soci├®t├® ?	2026-06-08 12:22:31.608079
81	6	user	pssssst	2026-06-09 15:35:23.932923
82	6	assistant	Int├®ressant ! C'est pour quelle soci├®t├® ?	2026-06-09 15:35:28.311123
\.


--
-- Data for Name: team; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.team (id, nom, role, image, linkedin, bio, created_at) FROM stdin;
3	Mohamed Khiari	D├®veloppeur Full-Stack \nJavaScript	/uploads/team/1780491354242-753959836.JPG	https://www.linkedin.com/in/khiari-mohamed-aba313316/	Expert en d├®veloppement logiciel avec 4 ans d\\'exp├®rience. Sp├®cialis├® dans le d├®veloppement full-stack moderne et l\\'int├®gration de solutions d\\'intelligence artificielle.	2026-06-03 14:55:54.447104
6	Khelil Ben Abdelghani	Directeur d'innovation \net d├®veloppement 	/uploads/team/1780490570830-101821474.jpeg	https://www.linkedin.com/in/khelil/	Director of Innovation & Development-UTIC Group | President Commission on Marketing & Advertising @International Chamber of Commerce ICCTunisia | Pr├®sident Commission Marketing & Communication CCI Tuniso-Fran├ºaise CCITF	2026-06-03 14:42:50.889101
1	Safouene Kais	G├®rant	/uploads/team/1780491292870-351478598.jpeg	https://www.linkedin.com/in/kais-safouene-3b7171188/	G├®rant de 2 soci├®t├®s en d├®veloppement web/mobile et SEO/AEO et AI. CEO @K.M Solutions - Nous aidons les entreprises ├á booster leur SEO et d├®veloppement web. D├®couvrez nos services : kmsolutions.tn	2026-06-03 14:54:53.069167
4	Malek SGHAIER	Ing├®nieur logiciel	/uploads/team/1780492384165-921755129.png	https://linkedin.com/in/malek-sghaier-585636212	Ing├®nieur logiciel orient├®e innovation, sp├®cialis├®e dans le d├®veloppement full-stack et les solutions dÔÇÖintelligence artificielle.	2026-06-03 15:13:04.236855
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, nom, email, mot_de_passe, role, created_at, reset_token, reset_token_expires) FROM stdin;
2	test	test@gmail.com	$2b$12$NcZuXtAApPdzQ/2XVl5haeZ6QZDA7FDFcPe75jYuM1fCBn/iJKabK	user	2026-06-03 13:18:56.05438	\N	\N
1	Malek	maleksg01@gmail.com	$2b$10$u21YU5MSJR4lajdFZ10I8O1coQqLNMxfuM0LeIdJExW.S.VA.0WM.	user	2026-06-03 12:53:08.118588	\N	\N
\.


--
-- Data for Name: visits; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.visits (id, page, referrer, user_agent, ip, created_at) FROM stdin;
56	/	http://localhost:3000/	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0	::1	2026-06-05 14:08:04.667099
60	/	http://localhost:3000/	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0	::1	2026-06-09 10:34:52.412181
59	/	http://localhost:3000/	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0	::1	2026-06-09 10:34:52.41168
54	/	http://localhost:3000/	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0	::1	2026-06-04 14:08:04.667099
57	/	http://localhost:3000/	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0	::1	2026-06-05 14:08:04.667099
58	/	http://localhost:3000/	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0	::1	2026-06-08 10:49:23.433869
55	/	http://localhost:3000/	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0	::1	2026-06-05 14:08:04.668155
\.


--
-- Name: app_screenshots_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.app_screenshots_id_seq', 20, true);


--
-- Name: applications_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.applications_id_seq', 2, true);


--
-- Name: clients_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.clients_id_seq', 6, true);


--
-- Name: conversations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.conversations_id_seq', 6, true);


--
-- Name: messages_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.messages_id_seq', 82, true);


--
-- Name: team_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.team_id_seq', 7, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 2, true);


--
-- Name: visits_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.visits_id_seq', 60, true);


--
-- PostgreSQL database dump complete
--

\unrestrict etxB8cN5pSMjPdSixxMGdPd4XrUX0h7Atw5x6XZuUfqwOPwQBKqqXNDvWgPgErB

