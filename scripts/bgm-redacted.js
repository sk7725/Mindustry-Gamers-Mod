const noteBullet = extend(BasicBulletType, {});
noteBullet.speed = 1;
noteBullet.damage = 0;
noteBullet.bulletWidth = 12;
noteBullet.bulletHeight = 12;
//friedEgg.shootEffect = Fx.shootSmall;
noteBullet.hitSound = Sounds.flame;
noteBullet.ammoMultiplier = 1;
noteBullet.homingPower = 0;
noteBullet.homingRange = 0;
noteBullet.knockback = 0;
noteBullet.hitShake = 0;
noteBullet.incendAmount = 20;
noteBullet.bulletSprite = "bgm-note";
noteBullet.lifetime = 1;
noteBullet.frontColor = Color.valueOf("#ffffff");

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
		/*const noteBullet = extend(BasicBulletType, {});
		noteBullet.damage = 1;
		noteBullet.bulletWidth = 1;
		noteBullet.bulletHeight = 1;
		noteBullet.lifetime = 1;
		noteBullet.hitSound = "gamersmod-bgm-undertale-gaster";*/
                Calls.createBullet(
			
			noteBullet,
			tile.getTeam(),
			tile.drawx(),
			tile.drawy(),
			0,
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
//bgmblock.shootSound = "gamersmod-bgm-undertale-gaster";

print("Created Music Block")
