import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WorkOutDictPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-work-out-dict',
  templateUrl: 'work-out-dict.html',
})
export class WorkOutDictPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkOutDictPage');
  }
  public static getPatternNameForInitial(id, lang) {
    var name = "";
    switch (id) {
      case "big3": name = lang == 'ja' ? 'BIG 3' : 'BIG 3'; break;
      case "upperBodyMenu": name = lang == 'ja' ? '上半身メニュー' : 'Upper Body'; break;
      case "lowerBodyMenu": name = lang == 'ja' ? '下半身メニュー' : 'Lower Body'; break;
    }
    return name;
  }
  public static getName(id, lang) {
    var name = "n/a";
    switch (id) {
      case "abductor": name = lang == 'ja' ? 'アブダクター' : 'Abductor'; break;
      case "abWheelRollout": name = lang == 'ja' ? 'アブローラー' : 'Ab Wheel Rollout'; break;
      case "aductor": name = lang == 'ja' ? 'アダクター' : 'Aductor'; break;
      case "armCurl": name = lang == 'ja' ? 'アームカール' : 'Arm Curl'; break;
      case "armHighSitUp": name = lang == 'ja' ? 'アームハイシットアップ' : 'Arms-High Partial Situp'; break;
      case "backExtension": name = lang == 'ja' ? 'バックエクステンション' : 'Back Extension'; break;
      case "backPlank": name = lang == 'ja' ? 'バックプランク' : 'Back Plank'; break;
      case "barbellCurl": name = lang == 'ja' ? 'バーベルカール' : 'Barbell Curl'; break;
      case "barbellOverHeadPress": name = lang == 'ja' ? 'バーベルオーバーヘッドプレス' : 'Barbell OverHead Press'; break;
      case "BarbellRussianTwist": name = lang == 'ja' ? 'バーベルロシアンツイスト' : 'Barbell Russian Twist'; break;
      case "barbellShoulderPress": name = lang == 'ja' ? 'バーベルショルダープレス' : 'Barbell Shoulder Press'; break;
      case "barbellShrug": name = lang == 'ja' ? 'バーベルシュラッグ' : 'Barbell Shrug'; break;
      case "barbellSpiderCurl": name = lang == 'ja' ? 'バーベルスパイダーカール' : 'Barbell Spider Curl'; break;
      case "behindNeckLatPullDown": name = lang == 'ja' ? 'バーベルネックラットプルダウン' : 'Behind Neck Lat Pull Down'; break;
      case "benchDips": name = lang == 'ja' ? 'ベンチディップス' : 'Bench Dips'; break;
      case "benchPress": name = lang == 'ja' ? 'ベンチプレス' : 'Bench Press'; break;
      case "bentOverBarbellRow": name = lang == 'ja' ? 'ベントオーバーバーベルロー' : 'Bent Over Barbell Row'; break;
      case "bentOverDumbbellRow": name = lang == 'ja' ? 'ベントオーバーダンベルロー' : 'Bent Over Dumbbell Row'; break;
      case "bulgarianSplitSquat": name = lang == 'ja' ? 'ブルガリアンスクワット' : 'Bulgarian Split Squat'; break;
      case "cableCrossover": name = lang == 'ja' ? 'ケーブルクロスオーバー' : 'Cable Crossover'; break;
      case "CableCrunch": name = lang == 'ja' ? 'ケーブルクランチ' : 'Cable Crunch'; break;
      case "cableCurl": name = lang == 'ja' ? 'ケーブルカール' : 'Cable Curl'; break;
      case "cableDragCurl": name = lang == 'ja' ? 'ケーブルドラッグカール' : 'Cable Drag Curl'; break;
      case "cableFly": name = lang == 'ja' ? 'ケーブルフライ' : 'Cable Fly'; break;
      case "cableHammerCurl": name = lang == 'ja' ? 'ケーブルハンマーカール' : 'Cable Hammer Curl'; break;
      case "cableKickback": name = lang == 'ja' ? 'ケーブルキックバック' : 'Cable Kickback'; break;
      case "cableRopeOverheadTricepsExtension": name = lang == 'ja' ? 'ケーブルロープオーバーヘッドトライセップスエクステンション' : 'Cable Rope Overhead Triceps Extension'; break;
      case "cableTricepsExtension": name = lang == 'ja' ? 'ケーブルトライセップスエクステンション' : 'Cable Triceps Extension'; break;
      case "calfPress": name = lang == 'ja' ? 'カーフプレス' : 'Calf Press'; break;
      case "chestPress": name = lang == 'ja' ? 'チェストプレス' : 'Chest Press'; break;
      case "chinUp": name = lang == 'ja' ? 'チンアップ' : 'Chin up'; break;
      case "chinning": name = lang == 'ja' ? 'チンニング' : 'Chinning'; break;
      case "closeGripBenchPress": name = lang == 'ja' ? 'クローズグリップベンチプレス' : 'Close Grip Bench Press'; break;
      case "concentrationCurl": name = lang == 'ja' ? 'コンセントレーションカール' : 'Concentration Curl'; break;
      case "concentrationHammerCurl": name = lang == 'ja' ? 'コンセントレーションハンマーカール' : 'Concentration Hammer Curl'; break;
      case "Crunch": name = lang == 'ja' ? 'クランチ' : 'Crunch'; break;
      case "deadLift": name = lang == 'ja' ? 'デッドリフト' : 'Dead Lift'; break;
      case "declineBenchPress": name = lang == 'ja' ? 'デクラインベンチプレス' : 'Decline Bench Press'; break;
      case "declineChestPress": name = lang == 'ja' ? 'デクラインチェストプレス' : 'Decline Chest Press'; break;
      case "declineDumbbellFly": name = lang == 'ja' ? 'デクラインダンベルフライ' : 'Decline Dumbbell Fly'; break;
      case "declineDumbbellPress": name = lang == 'ja' ? 'デクラインダンベルプレス' : 'Decline Dumbbell Press'; break;
      case "dips": name = lang == 'ja' ? 'ディップス' : 'Dips'; break;
      case "dragCurl": name = lang == 'ja' ? 'ドラッグカール' : 'Drag Curl'; break;
      case "dumbbellCurl": name = lang == 'ja' ? 'ダンベルカール' : 'Dumbbell Curl'; break;
      case "dumbbellFly": name = lang == 'ja' ? 'ダンベルフライ' : 'Dumbbell Fly'; break;
      case "dumbbellKickback": name = lang == 'ja' ? 'ダンベルキックバック' : 'Dumbbell Kickback'; break;
      case "dumbbellOverHeadPress": name = lang == 'ja' ? 'ダンベルオーバーヘッドプレス' : 'Dumbbell Overhead Press'; break;
      case "dumbbellPress": name = lang == 'ja' ? 'ダンベルプレス' : 'Dumbbell Press'; break;
      case "dumbbellPullover": name = lang == 'ja' ? 'ダンベルプルオーバー' : 'Dumbbell Pullover'; break;
      case "dumbbellShoulderPress": name = lang == 'ja' ? 'ダンベルショルダープレス' : 'Dumbbell Shoulder Press'; break;
      case "dumbbellShrug": name = lang == 'ja' ? 'ダンベルシュラッグ' : 'Dumbbell Shrug'; break;
      case "dumbbellSpiderCurl": name = lang == 'ja' ? 'ダンベルスパイダーカール' : 'Dumbbell Spider Curl'; break;
      case "dumbbellSquat": name = lang == 'ja' ? 'ダンベルスクワット' : 'Dumbbell Squat'; break;
      case "dumbbellTricepsExtension": name = lang == 'ja' ? 'ダンベルトライセップスエクステンション' : 'Dumbbell Triceps Extension'; break;
      case "frontSquat": name = lang == 'ja' ? 'フロントスクワット' : 'Front Squat'; break;
      case "gobletSquat": name = lang == 'ja' ? 'ゴブレットスクワット' : 'Goblet Squat'; break;
      case "HangingKneeRaise": name = lang == 'ja' ? 'ハンギングニーレイズ' : 'Hanging Knee Raise'; break;
      case "HangingLegRaise": name = lang == 'ja' ? 'ハンギングレッグレイズ' : 'Hanging Leg Raise'; break;
      case "HangingPike": name = lang == 'ja' ? 'ハンギングパイク' : 'Hanging Pike'; break;
      case "HangingRotatedKneeRaise": name = lang == 'ja' ? 'ハンギングローテーテッドニーレイズ' : 'Hanging Rotated Knee Raise'; break;
      case "HangingRotatedPike": name = lang == 'ja' ? 'ハンギングローテーテッドパイク' : 'Hanging Rotated Pike'; break;
      case "hammerCurl": name = lang == 'ja' ? 'ハンマーカール' : 'Hammer Curl'; break;
      case "hipThrust": name = lang == 'ja' ? 'ヒップスラスト' : 'Hip Thrust'; break;
      case "inclineBenchPress": name = lang == 'ja' ? 'インクラインベンチプレス' : 'Incline Bench Press'; break;
      case "inclineChestPress": name = lang == 'ja' ? 'インクラインチェストプレス' : 'Incline Chest Press'; break;
      case "inclineDumbbellCurl": name = lang == 'ja' ? 'インクラインダンベルカール' : 'Incline Dumbbell Curl'; break;
      case "inclineDumbbellFly": name = lang == 'ja' ? 'インクラインダンベルフライ' : 'Incline Dumbbell Fly'; break;
      case "inclineDumbbellPress": name = lang == 'ja' ? 'インクラインダンベルプレス' : 'Incline Dumbbell Press'; break;
      case "inclineHammerCurl": name = lang == 'ja' ? 'インクラインハンマーカール' : 'Incline Hammer Curl'; break;
      case "invertedRow": name = lang == 'ja' ? 'インバーテッドロー' : 'Inverted Row'; break;
      case "latPullDown": name = lang == 'ja' ? 'ラットプルダウン' : 'Lat Pull Down'; break;
      case "legExtension": name = lang == 'ja' ? 'ラットエクステンション' : 'Leg Extension'; break;
      case "legPress": name = lang == 'ja' ? 'レッグプレス' : 'Leg Press'; break;
      case "LegRaise": name = lang == 'ja' ? 'レッグレイズ' : 'Leg Raise'; break;
      case "lunge": name = lang == 'ja' ? 'ランジ' : 'Lunge'; break;
      case "lyingDumbbellTricepsExtension": name = lang == 'ja' ? 'ライイングダンベルトライセップスエクステンション' : 'Lying Dumbbell Triceps Extension'; break;
      case "lyingTricepsExtension": name = lang == 'ja' ? 'ライイングトライセップスエクステンション' : 'Lying Triceps Extension'; break;
      case "multiHip": name = lang == 'ja' ? 'マルチヒップ' : 'Multi Hip'; break;
      case "one-armDumbbellTricepsExtension": name = lang == 'ja' ? 'ワンアームダンベルトライセップスエクステンション' : 'One Arm Dumbbell Triceps Extension'; break;
      case "oneArmCableKickback": name = lang == 'ja' ? 'ワンアームケーブルキックバック' : 'One Arm Cable Kickback'; break;
      case "oneArmCableTricepsExtension": name = lang == 'ja' ? 'ワンアームケーブルトライセップスエクステンション' : 'One Arm Cable Triceps Extension'; break;
      case "oneArmDumbbellRow": name = lang == 'ja' ? 'ワンアームダンベルロー' : 'One Arm Dumbbell Row'; break;
      case "oneArmLyingTricepsExtension": name = lang == 'ja' ? 'ワンアームライイングトライセップスエクステンション' : 'One Arm Lying Triceps Extension'; break;
      case "pecDeckFly": name = lang == 'ja' ? 'ペックデックフライ' : 'Pec Deck Fly'; break;
      case "Plank": name = lang == 'ja' ? 'プランク' : 'Plank'; break;
      case "preacherCurl": name = lang == 'ja' ? 'プリーチャーカール' : 'Preacher Curl'; break;
      case "pullUp": name = lang == 'ja' ? 'プルアップ' : 'Pull Up'; break;
      case "pushUp": name = lang == 'ja' ? 'プッシュアップ' : 'Push Up'; break;
      case "reverseGripLatPullDown": name = lang == 'ja' ? 'リバースグリップラットプルダウン' : 'Reverse Grip Lat Pull Down'; break;
      case "reverseGripStandingCableRow": name = lang == 'ja' ? 'リバースグリップスタンディングケーブルロー' : 'Reverse Grip Standing Cable Row'; break;
      case "reverseGripTricepsPressDown": name = lang == 'ja' ? 'リバースグリップトライセップスプレスダウン' : 'Reverse Grip Triceps Press Down'; break;
      case "rowPulleyCableCrossover": name = lang == 'ja' ? 'ロープリーケーブルクロスオーバー' : 'Row Pulley Cable Crossover'; break;
      case "RussianTwist": name = lang == 'ja' ? 'ロシアンツイスト' : 'Russian Twist'; break;
      case "seatedCableRow": name = lang == 'ja' ? 'シーテッドケーブルロー' : 'Seated Cable Row'; break;
      case "seatedLegCurl": name = lang == 'ja' ? 'シーテッドレッグカール' : 'Seated Leg Curl'; break;
      case "SideBends": name = lang == 'ja' ? 'サイドベント' : 'Side Bends'; break;
      case "SideLegRaise": name = lang == 'ja' ? 'サイドレッグレイズ' : 'Side Leg Raise'; break;
      case "sideLateralRaise": name = lang == 'ja' ? 'サイドラテラルレイズ' : 'Side Lateral Raise'; break;
      case "sidePlank": name = lang == 'ja' ? 'サイドプランク' : 'Side Plank'; break;
      case "SitUp": name = lang == 'ja' ? 'シットアップ' : 'Situp'; break;
      case "SitUpTwist": name = lang == 'ja' ? 'シットアップツイスト' : 'Situp Twist'; break;
      case "smithMachineBenchPress": name = lang == 'ja' ? 'スミスマシンベンチプレス' : 'Smith Machine Bench Press'; break;
      case "smithMachineInclineBenchPress": name = lang == 'ja' ? 'スミスマシンインクラインベンチプレス' : 'Smith Machine Incline Bench Press'; break;
      case "smithMachineSeatedCalfRaise": name = lang == 'ja' ? 'スミスマシンシーテドカーフレイズ' : 'Smith Machine Seated Calf Raise'; break;
      case "smithMachineShrug": name = lang == 'ja' ? 'スミスマシンシュラッグ' : 'Smith Machine Shrug'; break;
      case "smithMachineStandingCalfRaise": name = lang == 'ja' ? 'スミスマシンスタンディングカーフレイズ' : 'Smith Machine Standing Calf Raise'; break;
      case "squat": name = lang == 'ja' ? 'スクワット' : 'Squat'; break;
      case "standingCableRow": name = lang == 'ja' ? 'スタンディングケーブルロー' : 'Standing Cable Row'; break;
      case "stiffLegDeadlift": name = lang == 'ja' ? 'スティフレッグデッドリフト' : 'Stiff Leg Deadlift'; break;
      case "straightArmPullDown": name = lang == 'ja' ? 'ストレートアームプルダウン' : 'Straight Arm Pull Down'; break;
      case "SupermanPike": name = lang == 'ja' ? 'スーパーマンパイク' : 'Superman Pike'; break;
      case "t-barRow": name = lang == 'ja' ? 'Tバーロー' : 'T-Bar Row'; break;
      case "tricepsDips": name = lang == 'ja' ? 'トライセップスディップス' : 'Triceps Dips'; break;
      case "tricepsPressDown": name = lang == 'ja' ? 'トライセップスプレスダウン' : 'Triceps Press Down'; break;
      case "tricepsPressDownCableRope": name = lang == 'ja' ? 'トラトライセップスプレスダウンケーブルロープ' : 'Triceps Press Down Cable Rope'; break;
      case "wristCurl": name = lang == 'ja' ? 'リストカール' : 'Wrist Curl'; break;
      case "wristExtension": name = lang == 'ja' ? 'リストエクステンション' : 'Wrist Extension'; break;
    }
    return name;
  }

}
