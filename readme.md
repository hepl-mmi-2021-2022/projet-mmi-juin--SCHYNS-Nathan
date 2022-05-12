# Postknight

## Description :

Postknight est un jeu développé par les malaisiens de chez [Kurechii](https://kurechii.com/). Le studio fondé peu avant 2010 est connu et reconnu pour ses jeux mobiles. Leurs productions sont trouvable gratuitement sur les stores Android et Apple et sont disponible en une multitude de langues dont l'anglais et le français.

D'après leur site, Postknight a été publié en 2017.



## Règles du jeu :

Le jeu est un *Runner* (= personnage qui court/avance tout seul) assez simple agrémenté de quelques notions de RPG pour gérer la progression du joueur au travers des différents niveaux et de l'histoire.

### Gameplay

Avant de lancer un niveau, notre personnage se trouve dans un *hub* à partir duquel on peut accéder à différentes options, améliorer/changer notre équipement, sélectionner un ancien niveau ... Dès que l'on appuie sur le bouton GO!, le dernier niveau débloqué est lancé.

On arrive alors dans la partie jeu à proprement parlée. Notre personnage avance tout seul vers l'objectif à droite et échange automatique des coups avec les ennemis qu'il croise. (Cela cause des dégâts aux 2 entités !) Chaque coup qu'il échange diminue ses PV (s'ils atteignent 0, c'est partie terminée) ainsi que ceux de l'ennemi.

Le joueur à 3 actions à sa disposition : **Charger**, **Se défendre** et **Utiliser un objet**.

- **Charger** permet d'effectuer une charge sur une courte distance qui double les dégâts infligés aux ennemis. (mais n'annule pas les dégâts subit !) ;
- **Se défendre** permet de diminuer les dégâts subits ainsi que sa vitesse de course tout en continuant d'attaquer ;
- **Utiliser un objet** permet d'utiliser un objet... Cela permet en général de se soigner et est à utilisation unique par niveau ;

Les 2 premières actions ont un *cool down* de 3 et 5 secondes respectivement.

Lorsqu'un niveau est terminé, notre personnage gagne des points d'expérience lui permettant d'augmenter certaines caractéristiques comme les PV, les dégâts infligés ou de diminuer les dégâts subits.

### Gameplay adapté

Pour ma version du jeu, je ne compte pas recrée la partie RPG (niveau, statistique à augmenter, équipements, ...) et, par extension, la partie "d'avant jeu". (le hub donc)

Je compte donc garder la partie *Runner* mais l'adapter afin qu'elle se suffise à elle même. Je vais donc ajouter un score, rendre le niveau infini et retravailler la façon dont marchent les objets. (% de chance qu'un ennemi en fasse tomber ?)



## TODO :

### HTML & CSS

- [x] Créer l'HTML de la page web ;
- [x] Créer le CSS de la page web (la présentation autour du jeu) ;



### Graphisme

- [x] Récupérer les décors du jeu ;
- [ ] Récupérer le sprite et les animation du personnage ;
- [x] Récupérer le HUD du jeu ;



- [ ] ~~Redessiner les décors, sprites et HUD du jeu (seulement si projet terminé en avance... ce qui est peu probable...) ,~~

Toutes les ressources graphiques proviennent de capture d'écran du jeu !



### BackgroundCanvas et TS

- [x] Coder les décors et leurs défilements ;
- [ ] Coder le personnage et son déplacement ;
- [ ] Coder les actions (Charger et Se défendre) ;
- [ ] Coder les ennemis ;
- [ ] Coder les interactions (attaque automatique, perte de PV, interaction des actions) ;



## Démo du jeu

Voici une vidéo qui présente le gameplay du jeu : https://youtu.be/dslgIXt-CX0?t=55

Et voilà le lien vers ma version du jeu :

