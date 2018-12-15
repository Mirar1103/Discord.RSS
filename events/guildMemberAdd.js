/**
 * Created by Maximilian on 15.12.2018.
 */

module.exports = function (member) {
    let guild = member.guild; // Reading property `guild` of guildmember object.
    let memberTag = member.user.tag; // GuildMembers don't have a tag property, read property user of guildmember to get the user object from it
    if(guild.systemChannel){ // Checking if it's not null
        guild.systemChannel.send(memberTag + " has joined!");}
    //member.guild.channels.find("Name", "welcome").send("Welcome to our community "+ member.displayName+". \n"+
    //    "I hope you'll enjoy your time here, but first you should read the rules pinned here.\n" +
    //     "Oh and before I forget, if you want to be notified about upadtes of Kitsune, enter ~subme ")
}