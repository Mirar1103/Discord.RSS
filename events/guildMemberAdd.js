/**
 * Created by Maximilian on 15.12.2018.
 */

module.exports = function (member) {
    member.guild.channels.find("Name", "welcome").send("Welcome to our community "+ member.displayName+". \n"+
        "I hope you'll enjoy your time here, but first you should read the rules pinned here.\n" +
        "Oh and before I forget, if you want to be notified about upadtes of Kitsune, enter ~subme ")
}