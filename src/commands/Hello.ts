import { CommandInteraction, Client } from "discord.js";
import { Command } from "../Command";

export const Hello: Command = {
    name: "hello",
    description: "Returns a greeting",
    run: async (client: Client, interaction: CommandInteraction) => {
        const content = "https://discord.gg/Q6zMtwKEgV";

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
};