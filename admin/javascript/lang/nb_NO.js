if(typeof(ss) == 'undefined' || typeof(ss.i18n) == 'undefined') {
	if(typeof(console) != 'undefined') console.error('Class ss.i18n not defined');
} else {
	ss.i18n.addDictionary('nb_NO', {
		'LeftAndMain.CONFIRMUNSAVED': "Er du sikker på at du vil forlate denne siden?\n\nADVARSEL: Dine endringer har ikke blitt lagret.\n\nKlikk OK for å fortsette, eller Avbryt for å bli værende på denne siden.",
		'LeftAndMain.CONFIRMUNSAVEDSHORT': "ADVARSEL: Endringene dine har ikke blitt lagret.",
		'SecurityAdmin.BATCHACTIONSDELETECONFIRM': "Vil du virkelig slette %s grupper?",
		'ModelAdmin.SAVED': "Lagret",
		'ModelAdmin.REALLYDELETE': "Vil du virkelig slette?",
		'ModelAdmin.DELETED': "Slettet",
		'ModelAdmin.VALIDATIONERROR': "Feil ved validering av data",
		'LeftAndMain.PAGEWASDELETED': "Denne siden ble slettet.  For å redigere en side, velg en til venstre."
	});
}
