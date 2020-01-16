// create a simple shockwave effect
const siloLaunchEffect = newEffect(20, e => {

    Draw.color(Color.white, Color.lightGray, e.fin());

    Lines.stroke(e.fout() * 3);

    Lines.circle(e.x, e.y, e.fin() * 30);
});

var region = Core.atlas.find("gamersmod-bgm-redacted");
print('Loading Music Block...');

const bgmblock = extendContent(Turret, "bgm-redacted", {
	buildConfiguration(tile, table){
		table.addImageButton(Icon.arrowRightSmall, Styles.clearTransi, run(() => {
			tile.configure(0);
		})).size(50);
	},

	configured(tile, value){
		Effects.effect(siloLaunchEffect, tile);
                Calls.createBullet(
                    Bullets.flakExplosive,
                    tile.getTeam(),
                    tile.drawx(),
                    tile.drawy(),
                    Mathf.random(360),
                    Mathf.random(0, 0),
                    Mathf.random(0, 0)
                );
	},

	//draw(tile){
	//	Draw.rect(region, tile.drawx(), tile.drawy());
	//}
});

bgmblock.localizedName = "Music Block - REDACTED";
bgmblock.description = "Iㅜ'ㄹ RUDㅌ ㅜㅇ TAㄴK ABㅇUㅜ ㄹOMEㅇNㅌ Wㅐㅇ'ㄹ ㄴㅣSTㅌNㅣNG";
bgmblock.configurable = true;
bgmblock.shootSound = "bgm-undertale-gaster";

print("Created Music Block")
