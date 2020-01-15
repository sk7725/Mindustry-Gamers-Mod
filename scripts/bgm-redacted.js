var region = Core.atlas.find("gamersmod-bgm-redacted");
print('Loading Music Block...')

const bgmblock = extendContent(genericSmelter, "bgm-redacted", {
	buildConfiguration(tile, table){
		table.addImageButton(Icon.arrowUpSmall, Styles.clearTransi, run(() => {
			tile.configure(0);
		})).size(50);
	},

	configured(tile, player, value){
	},

	draw(tile){
		Draw.rect(region, tile.drawx(), tile.drawy()
	}
});

bgmblock.localizedName = "Music Block - REDACTED";
bgmblock.description = "Iㅜ'ㄹ RUDㅌ ㅜㅇ TAㄴK ABㅇUㅜ ㄹOMEㅇNㅌ Wㅐㅇ'ㄹ ㄴㅣSTㅌNㅣNG";
bgmblock.configurable = true;

print("Created Music Block")
