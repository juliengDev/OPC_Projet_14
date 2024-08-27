# <p align="center">Wealth Health</p>

<p align="center">
  <img src="https://i.imgur.com/5AgGLL9m.png" alt="Image">
</p>

## Migration d'une librairie jQuery vers React

## 📝 Description

Ce projet vise à moderniser l'application web interne HRnet de WealthHealth en remplaçant son architecture front-end basé sur jQuery par des composants React. Cette transition permettra d'améliorer les performances et la stabilité de l'application, tout en facilitant sa maintenance et son évolutivité.

## 🚀 Tâches Principales

### 🔄 Conversion de HRnet en JQuery vers React

Le repository actuel de HRnet peut être consulté [ici](https://github.com/OpenClassrooms-Student-Center/P12_Front-end). Voici les principales tâches réalisées :

1. Créer une version React des pages "Create Employee" et "Employee List".
2. Implémenter un système de gestion d'état avec React
3. Maintenir la cohérence du style visuel de l'application.

### 🔄 Conversion des Plugins jQuery en Composants React

Quatre plugins jQuery utilisés dans HRnet ont été convertis en composants React :

Les anciens plugins :

- [Sélecteur de date](https://github.com/xdan/datetimepicker)
- [Fenêtre modale](https://github.com/kylefox/jquery-modal)
- [Menus déroulants](https://github.com/jquery/jquery-ui/blob/master/ui/widgets/selectmenu.js)
- [Tableaux de données](https://github.com/DataTables/DataTables)

Convertion du code spécifique à l'interface utilisateur de chaque plugin en composants React.
Cliquer sur les liens pour avoir plus d'informations sur leur fonctionnement individuel:

- [DateSelector](https://github.com/juliengDev/WealthHealth/blob/main/src/Components/dateSelector/dateSelector.md)
- [Dropdown](https://github.com/juliengDev/WealthHealth/blob/main/src/Components/dropdown/dropdown.md)
- [Table](https://github.com/juliengDev/WealthHealth/blob/main/src/Components/table/table.md)

Composant personnel cree, exporter sur npm et importer dans le projet :

- [Modal](https://github.com/juliengDev/WealthHealth/blob/main/src/Components/modal/modal.md)
- Lien vers la lib npm : https://www.npmjs.com/package/juliengilbertdev-modal

### ⏱️ Tests de Performance

Rapport d'utilisation de Lighthouse effectué pour comparer les performances de l'application web avant et après la conversion.

Ancienne version : [lien](https://drive.google.com/file/d/1tJcVKu87BHBAy1AGjzF4tvhJBHHIThWV/view?usp=drive_link)

Nouvelle version : [lien](https://drive.google.com/file/d/1tTjYMrhYDKuKBqTTLYtHoNUxuABShPcP/view?usp=drive_link)

## 🛠️ Decisions Technologiques

- [React Vite Toolkit](https://vitejs.dev/) : Developpement de l'application React
- [React Router Dom](https://reactrouter.com/) : Bibliothèque de routage pour les applications React
- [MUI](https://mui.com/) : Collection de composants React réutilisables et personnalisables basés sur Material-UI
- [React Hook Form](https://react-hook-form.com/) : Gestion des formulaires dans React en fournissant une approche basée sur les hooks pour la collecte et la validation des données du formulaire.
- [Tailwind](https://tailwindcss.com/) : Bibliothèque de styles utilitaire
- [Context API + Reducer pattern](https://fr.legacy.reactjs.org/docs/context.html) : Gestion du state UI global
- [ESLint](https://eslint.org/) : Detection et correction des erreurs de syntaxe

## 🤝 Contribution

Les contributions sont les bienvenues ! Suivez nos modèles d'[Issues GitHub](https://github.com/juliengDev/WealthHealth/issues) pour participer à l'avancement du projet.

## 👤 Auteur

Ce projet a été créé par [Julien Gilbert](https://github.com/juliengDev).
