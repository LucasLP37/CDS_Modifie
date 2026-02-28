# CDS Modifié
Il s'agit d'une version modifié du [code suivant][1].

J'ai créé cette version pour avoir des renseignements persistents sur le tableau (cf. Les ajouts) afin ne pas réécrire ces derniers en cas de nouvelle génération faite suite à une erreur ou un oubli sur le tableau.

## Les documents
La nouvelle version :
- [Du tableau][3]
- [Du template][4]

## Les ajouts
Ce version comporte une nouvelle feuille "Info" comportant des informations sur :
- Les parties prenantes NOM et prénom :
    - De l'étudiant
    - Du tuteur académique
    - Du tuteur industriel
- Les années :
    - L'année en cours
    - Les années de début et fin de promotion
- Des infomations sur l'entreprise :
    - Département/service
    - Nom de l'entreprise
    - Ville du lieu de travail

**! NE REMPLISSEZ QUE LES CELLULES SUR FOND BLEU !**

## Les modifications de code
Dans `Main.gs` :
- La constante `template` a été changée pour pointe une version modifiée du template compartant les repères des nouvelles variables

Dans `Initialisation.gs` :
- Le nom sous lequel le nouveu template est téléchargé a été modifié : `_Xtemplate`.

Dans `Generation.gs` :
- De nouvelles fonctions ont été ajoutées :
    - `complete_all_info` : Séquence de remplissage des renseignements
    - `complete_info` : Remplir une repère `{{k}}` avec la valeur `v`
    - `replaceIfEmpty` et `concatOrReplaceIfEmpty` : Remplace par une valeur par défaut si une case requise n'est pas rempli
- Le nom du fichier généré a été modifié : `_Xgenerated`


Dans `Help.gs` :
- Dans le texte HMTL de la fenêtre d'aide, un disclamer a été ajouté pour rappeler que **l'auteur original n'est pas en cause en cas de problème avec la nouvelle feuille `Info`**

**DANS LA VERSION ACTUELLE, EN CAS DE RÉUSSITE, LES POPUPS DE CONFIRMATION INDIQUERONT ENCORE LES ANCIENS NOM DE FICHIERS : `_template` et `_generated` (mais le lien `_generated` ouvre bien le document `_Xgenerated`)** 

## Que faire de cette version ?
Cette dernière est publier sur ce repo-ci uniquement dans un but expérimental. Plusieurs possibilités :
- Je peux laisser le code ici
- Bien évidemment l'[auteur du code d'origine][2] peut reprendre ce dernier

[1]:(https://github.com/louisthomaspro/carnet-de-suivi-dii-polytech)
[2]:(https://github.com/louisthomaspro)

[3]:(https://docs.google.com/spreadsheets/d/1Osv9B_v_sWnTmFMrSbvSD5zTxm3dl3BVhDLaAXkAjKU)
[4]:(https://docs.google.com/document/d/1B45Vf1J0u_ICeZy5BmPGWe78_emFUgIcs8pu0cNTXrw)
