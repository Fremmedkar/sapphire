if(typeof(ss) == 'undefined' || typeof(ss.i18n) == 'undefined') {
	if(typeof(console) != 'undefined') console.error('Class ss.i18n not defined');
} else {
	ss.i18n.addDictionary('nb_NO', {
		'VALIDATOR.FIELDREQUIRED': 'Vennligst fyll ut "%s", det er påkrevd.',
		'HASMANYFILEFIELD.UPLOADING': 'Laster opp... %s',
		'TABLEFIELD.DELETECONFIRMMESSAGE': 'Er du sikker på at du vil slette denne oppføringen?',
		'LOADING': 'laster...',
		'UNIQUEFIELD.SUGGESTED': "Endret verdi til '%s' : %s",
		'UNIQUEFIELD.ENTERNEWVALUE': 'Du må legge inn en ny verdi for dette feltet',
		'UNIQUEFIELD.CANNOTLEAVEEMPTY': 'Dette feltet kan ikke være tomt',
		'RESTRICTEDTEXTFIELD.CHARCANTBEUSED': "Tegnet '%s' kan ikke brukes i dette feltet",
		'UPDATEURL.CONFIRM': 'Ønsker du å endre URL til:\n\n%s/\n\nKlikk OK for å endre URL, klikk Avbryt for å la den være:\n\n%s',
		'UPDATEURL.CONFIRMURLCHANGED':'URL har blitt endret til\n"%s"',
		'FILEIFRAMEFIELD.DELETEFILE': 'Slett fil',
		'FILEIFRAMEFIELD.UNATTACHFILE': 'Koble fra fil',
		'FILEIFRAMEFIELD.DELETEIMAGE': 'Slett fil',
		'FILEIFRAMEFIELD.CONFIRMDELETE': 'Er du sikker på at du vil slette denne filen?',
		'LeftAndMain.IncompatBrowserWarning': 'Nettleseren din er ikke kompatibel med dette grensesnittet. Vennligst bruk Internet Explorer 7+, Google Chrome 10+ eller Mozilla Firefox 3.5+.',
		'GRIDFIELD.ERRORINTRANSACTION': 'En feil oppstod ved henting av data fra serveren\n Vennligst prøv igjen senere.',
		'UploadField.ConfirmDelete': 'Er du sikker på at du vil fjerne denne filen fra filsystemet?',
		'UploadField.PHP_MAXFILESIZE': 'Filen er større enn tillatt (upload_max_filesize, php.ini)',
		'UploadField.HTML_MAXFILESIZE': 'Filen er større enn tillatt (MAX_FILE_SIZE, HTML)',
		'UploadField.ONLYPARTIALUPLOADED': 'Filen ble bare delvis lastet opp',
		'UploadField.NOFILEUPLOADED': 'Ingen filer ble lastet opp',
		'UploadField.NOTMPFOLDER': 'Midlertidig mappe mangler',
		'UploadField.WRITEFAILED': 'Kunne ikke skrive filen til disk',
		'UploadField.STOPEDBYEXTENSION': 'Filopplastingen er stoppet på grunn av filtype',
		'UploadField.TOOLARGE': 'Filstørrelsen er for stor',
		'UploadField.TOOSMALL': 'Filstørrelsen er for liten',
		'UploadField.INVALIDEXTENSION': 'Filtypen er ikke tillatt',
		'UploadField.MAXNUMBEROFFILESSIMPLE': 'Maks antall filer er oversteget',
		'UploadField.UPLOADEDBYTES': 'Opplastede bytes overstiger filstørrelse',
		'UploadField.EMPTYRESULT': 'Filopplastingen er tom',
		'UploadField.LOADING': 'Laster ...',
		'UploadField.Editing': 'Endrer ...',
		'UploadField.Uploaded': 'Lastet opp'
	});
}
