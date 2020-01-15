var region = Core.atlas.find("gamersmod-bgm-redacted");
print('Loading Music Block...');

const bgmblock = extendContent(Block, "bgm-redacted", {
	buildConfiguration(tile, table){
		table.addImageButton(Icon.arrowRightSmall, Styles.clearTransi, run(() => {
			tile.configure(0);
		})).size(50);
	},

	configured(tile, value){
		Core.audio.src("gamersmod-bgm-undertale-gaster");
		Core.audio.play();
	},

	//draw(tile){
	//	Draw.rect(region, tile.drawx(), tile.drawy());
	//}
});

bgmblock.localizedName = "Music Block - REDACTED";
bgmblock.description = "Iㅜ'ㄹ RUDㅌ ㅜㅇ TAㄴK ABㅇUㅜ ㄹOMEㅇNㅌ Wㅐㅇ'ㄹ ㄴㅣSTㅌNㅣNG";
bgmblock.configurable = true;

print("Created Music Block")
