//var region = Core.atlas.find("bgm-redacted");
print('Loading Music Block...')

const spinner = extendContent(Block, "bgm-redacted", {
	//init(){
	//	this.itSpin = 2; // it spin
	//},
	buildConfiguration(tile, table){
		table.addImageButton(Icon.arrowUpSmall, Styles.clearTransi, run(() => {
			// Tell client to spin faster
			tile.configure(1);
		})).size(50);
		//table.row();
		//table.addImageButton(Icon.arrowDownSmall, Styles.clearTransi, run(() => {
		//	// Tell client to spin slower
		//	tile.configure(-1);
		//})).size(50);
	},

	configured(tile, player, value){
		if(value != -1){
			value = 1;
		}

		//this.itSpin += value;
	},

	//draw(tile){
	//	Draw.rect(region, tile.drawx(), tile.drawy(), Time.time() * this.itSpin)
	//}
});

spinner.localizedName = "Music Block - REDACTED";
spinner.description = "Iㅜ'ㄹ RUDㅌ ㅜㅇ TAㄴK ABㅇUㅜ ㄹOMEㅇNㅌ Wㅐㅇ'ㄹ ㄴㅣSTㅌNㅣNG";
spinner.configurable = true;

print("Created Music Block")